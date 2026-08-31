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
  const writeToken = process.env.SANITY_API_WRITE_TOKEN
  if (!writeToken) {
    return NextResponse.json(
      { error: 'Falta SANITY_API_WRITE_TOKEN en las variables de entorno de este despliegue.' },
      { status: 500 },
    )
  }

  const providedToken = new URL(request.url).searchParams.get('token')
  if (providedToken !== writeToken) {
    return NextResponse.json({ error: 'No autorizado. Añade ?token=tu SANITY_API_WRITE_TOKEN a la URL.' }, { status: 401 })
  }

  const client = createClient({ projectId, dataset, apiVersion, token: writeToken, useCdn: false })
  const migrated: string[] = []

  try {
    for (const id of SINGLETON_IDS) {
      const doc = await client.getDocument<SanityDoc>(id)
      if (!doc) continue
      const patch = buildPatch(doc)
      if (Object.keys(patch).length === 0) continue
      await client.patch(id).set(patch).commit()
      migrated.push(`${id} (${doc._type}): ${Object.keys(patch).join(', ')}`)
    }

    for (const type of ['faq', 'testimonial']) {
      const docs = await client.fetch<SanityDoc[]>(`*[_type == $type]`, { type })
      for (const doc of docs) {
        const patch = buildPatch(doc)
        if (Object.keys(patch).length === 0) continue
        await client.patch(doc._id).set(patch).commit()
        migrated.push(`${doc._id} (${doc._type}): ${Object.keys(patch).join(', ')}`)
      }
    }
  } catch (err) {
    return NextResponse.json(
      { error: String(err instanceof Error ? err.message : err), migratedSoFar: migrated },
      { status: 500 },
    )
  }

  return NextResponse.json({
    done: true,
    count: migrated.length,
    migrated,
    message:
      migrated.length === 0
        ? 'Nada que migrar (o ya estaba todo migrado). Recuerda borrar esta ruta.'
        : 'Migración completada. Recuerda borrar esta ruta del proyecto.',
  })
}
