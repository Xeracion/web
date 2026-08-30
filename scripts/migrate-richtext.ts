import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error(
    'Faltan variables de entorno. Revisa NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET y SANITY_API_WRITE_TOKEN en .env.local.',
  )
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2026-07-30',
  useCdn: false,
})

// Migración necesaria porque varios campos "de texto" pasaron de ser un
// string plano a texto enriquecido (portable text), para poder llevar
// negrita y varios párrafos. Convierte cualquier valor que siga siendo un
// string plano (o un array de strings, en el caso de historiaParagraphs) al
// nuevo formato de bloques. Es seguro ejecutarlo varias veces: un campo ya
// migrado (un array de bloques) se detecta y se deja tal cual.

type SanityDoc = { _id: string; _type: string; [key: string]: unknown }

function toBlock(text: string) {
  return {
    _type: 'block',
    _key: randomUUID(),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: randomUUID(), text, marks: [] }],
  }
}

const SINGLE_TEXT_FIELDS: Record<string, string[]> = {
  home: ['intro', 'closingText'],
  homeEn: ['intro', 'closingText'],
  pageFerrol: ['heroText', 'arrivalAddressText', 'arrivalTransportText', 'closingText'],
  pageFerrolEn: ['heroText', 'arrivalAddressText', 'arrivalTransportText', 'closingText'],
  pageIrse: ['heroText', 'closingText'],
  pageEn: ['heroText', 'closingText'],
  pageNosotros: ['heroText', 'closingText'],
  pageNosotrosEn: ['heroText', 'closingText'],
  pageMentores: ['heroText', 'whyText', 'closingText'],
  faq: ['answer'],
  testimonial: ['quote'],
}

const PARAGRAPH_ARRAY_FIELDS: Record<string, string[]> = {
  pageNosotros: ['historiaParagraphs'],
  pageNosotrosEn: ['historiaParagraphs'],
}

const SINGLETON_IDS = [
  'home',
  'homeEn',
  'pageFerrol',
  'pageFerrolEn',
  'pageIrse',
  'pageEn',
  'pageNosotros',
  'pageNosotrosEn',
  'pageMentores',
]

function buildPatch(doc: SanityDoc) {
  const patch: Record<string, unknown> = {}

  for (const field of SINGLE_TEXT_FIELDS[doc._type] ?? []) {
    const value = doc[field]
    if (typeof value === 'string' && value.length > 0) {
      patch[field] = [toBlock(value)]
    }
  }

  for (const field of PARAGRAPH_ARRAY_FIELDS[doc._type] ?? []) {
    const value = doc[field]
    if (Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === 'string')) {
      patch[field] = (value as string[]).map((paragraph) => toBlock(paragraph))
    }
  }

  return patch
}

async function migrateDoc(doc: SanityDoc) {
  const patch = buildPatch(doc)
  if (Object.keys(patch).length === 0) return false

  await client.patch(doc._id).set(patch).commit()
  console.log(`Migrado ${doc._id} (${doc._type}): ${Object.keys(patch).join(', ')}`)
  return true
}

async function run() {
  let migrated = 0

  for (const id of SINGLETON_IDS) {
    const doc = await client.getDocument<SanityDoc>(id)
    if (!doc) continue
    if (await migrateDoc(doc)) migrated += 1
  }

  for (const type of ['faq', 'testimonial']) {
    const docs = await client.fetch<SanityDoc[]>(`*[_type == $type]`, { type })
    for (const doc of docs) {
      if (await migrateDoc(doc)) migrated += 1
    }
  }

  console.log(`Listo. ${migrated} documento(s) actualizado(s).`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
