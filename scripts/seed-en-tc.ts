import { config } from 'dotenv'
config({ path: '.env.local' })

import { createClient } from '@sanity/client'

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

// Tercera tarjeta de "Types of stay" en /en, junto a ESC volunteering y
// Erasmus+ traineeship. createIfNotExists para no pisar nada si ya existiera.
const tcEn = {
  _id: 'mobilityProgram-tc-en',
  _type: 'mobilityProgram',
  name: 'Training Course (TC)',
  duration: '5 to 10 days',
  idealFor:
    'You work (or want to work) in youth work and are looking for a short, practical training hosted in Ferrol.',
  covers: 'Travel, accommodation, food and the training itself.',
  ctaLabel: 'Ask about training courses',
  ctaUrl: 'mailto:info@xeracion.org',
  route: 'en',
}

async function run() {
  console.log(`Creando ${tcEn._id} en ${dataset} (si no existe ya)...`)
  await client.createIfNotExists(tcEn)
  console.log('Listo.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
