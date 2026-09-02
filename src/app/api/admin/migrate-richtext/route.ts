import { randomUUID } from 'crypto'

import { createClient } from '@sanity/client'
import { NextResponse } from 'next/server'

import { apiVersion, dataset, projectId } from '@/sanity/env'

// Ruta temporal para ejecutar scripts/migrate-richtext.ts desde el navegador,
// contra el dataset de producción, sin necesidad de terminal. Visítala una
// vez como /api/admin/migrate-richtext?token=TU_SANITY_API_WRITE_TOKEN y
// bórrala del proyecto en cuanto confirmes que ha funcionado — no debe
// quedarse desplegada de forma permanente.

export const dynamic = 'force-dynamic'

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

export async function GET(request: Request) {
  const writeToken = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_WRITE_TOKEN_2
  if (!writeToken) {
    return NextResponse.json(
      {
        error:
          'Falta SANITY_API_WRITE_TOKEN (o SANITY_API_WRITE_TOKEN_2) en las variables de entorno de este despliegue.',
      },
      { status: 500 },
    )
  }

  const providedToken = new URL(request.url).searchParams.get('token')
  if (providedToken !== writeToken) {
    return NextResponse.json(
      { error: 'No autorizado. Añade ?token=el valor de SANITY_API_WRITE_TOKEN (o _2) a la URL.' },
      { status: 401 },
    )
  }

  const debug = new URL(request.url).searchParams.get('debug') === '1'
  const client = createClient({ projectId, dataset, apiVersion, token: writeToken, useCdn: false })
  const migrated: string[] = []
  const diagnostics: Record<string, unknown> = { projectId, dataset }

  try {
    const singletonsFound: Record<string, string> = {}
    for (const id of SINGLETON_IDS) {
      const doc = await client.getDocument<SanityDoc>(id)
      if (!doc) {
        singletonsFound[id] = 'no existe'
        continue
      }

      if (debug) {
        const fields = [...(SINGLE_TEXT_FIELDS[doc._type] ?? []), ...(PARAGRAPH_ARRAY_FIELDS[doc._type] ?? [])]
        singletonsFound[id] = fields
          .map((f) => {
            const v = doc[f]
            if (v === undefined) return `${f}=undefined`
            if (typeof v === 'string') return `${f}=string("${v.slice(0, 30)}...")`
            if (Array.isArray(v)) return `${f}=array(${v.length})`
            return `${f}=${typeof v}`
          })
          .join(' · ')
      }

      const patch = buildPatch(doc)
      if (Object.keys(patch).length === 0) continue
      await client.patch(id).set(patch).commit()
      migrated.push(`${id} (${doc._type}): ${Object.keys(patch).join(', ')}`)
    }
    if (debug) diagnostics.singletons = singletonsFound

    for (const type of ['faq', 'testimonial']) {
      const docs = await client.fetch<SanityDoc[]>(`*[_type == $type]`, { type })
      if (debug) diagnostics[`${type}Count`] = docs.length
      for (const doc of docs) {
        const patch = buildPatch(doc)
        if (Object.keys(patch).length === 0) continue
        await client.patch(doc._id).set(patch).commit()
        migrated.push(`${doc._id} (${doc._type}): ${Object.keys(patch).join(', ')}`)
      }
    }
  } catch (err) {
    return NextResponse.json(
      { error: String(err instanceof Error ? err.message : err), migratedSoFar: migrated, diagnostics },
      { status: 500 },
    )
  }

  return NextResponse.json({
    done: true,
    count: migrated.length,
    migrated,
    ...(debug ? { diagnostics } : {}),
    message:
      migrated.length === 0
        ? 'Nada que migrar (o ya estaba todo migrado). Recuerda borrar esta ruta.'
        : 'Migración completada. Recuerda borrar esta ruta del proyecto.',
  })
}
