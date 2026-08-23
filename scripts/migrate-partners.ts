import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@sanity/client'
import { randomUUID } from 'node:crypto'

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

// El campo "partners" de pageNosotros pasó de array de texto a array de
// objetos "partner" (con logo opcional). Este script convierte las entradas
// de texto que ya tuvieras a la nueva forma, sin tocar las que ya sean
// objetos "partner" (por ejemplo si ya les subiste un logo a mano).
async function run() {
  const doc = await client.getDocument('pageNosotros')
  if (!doc) {
    console.log('No existe el documento pageNosotros todavía. Nada que migrar.')
    return
  }

  const partners = (doc.partners ?? []) as unknown[]
  const migrated = partners.map((partner) =>
    typeof partner === 'string'
      ? { _type: 'partner', _key: randomUUID(), name: partner }
      : partner,
  )

  const changed = migrated.some((partner, i) => partner !== partners[i])
  if (!changed) {
    console.log('Todos los partners ya están en el formato nuevo. Nada que hacer.')
    return
  }

  await client.patch('pageNosotros').set({ partners: migrated }).commit()
  console.log(`Listo. ${migrated.length} partners en el nuevo formato.`)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
