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

const client = createClient({ projectId, dataset, token, apiVersion: '2026-07-30', useCdn: false })

function toBlock(text: string) {
  return {
    _type: 'block',
    _key: randomUUID(),
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: randomUUID(), text, marks: [] }],
  }
}

// Aplica el copy nuevo del pivote estratégico (catálogo de experiencias por
// delante de los programas de financiación) a los singletons YA EXISTENTES
// en producción. A diferencia de los scripts seed*.ts (que usan
// createIfNotExists y nunca tocan nada publicado), este script SÍ sobrescribe
// campos concretos a propósito — es la actualización de contenido que exige
// el pivote, no solo sembrar contenido nuevo. Asume que `home`, `pageFerrol`,
// `pageFerrolEn`, `pageNosotros` y `pageNosotrosEn` ya existen (los creó
// scripts/seed.ts hace tiempo). Es seguro ejecutarlo más de una vez.
//
// Los campos legales de pageNosotros/pageNosotrosEn (CIF, OID, PIC...) y los
// de pageEn (tarjetas "for organisations", estadísticas) se dejan vacíos
// aquí a propósito — son datos reales de la asociación que hay que rellenar
// a mano en el Studio, no inventarlos en un script.

async function patchHome() {
  await client
    .patch('home')
    .set({
      eyebrow: 'Xeración · Ferrol, Galicia',
      heading: 'Encuentra aquí tu aventura.',
      intro: [
        toBlock(
          'Caminos, bosques, ciudades europeas y noches en Ferrol. Unas las pagas tú, otras te las paga Europa. Todas te dejan algo.',
        ),
      ],
      catalogIntro: { _type: 'sectionIntro', eyebrow: 'Catálogo', heading: 'Elige tu experiencia.' },
      agendaEyebrow: 'Esta semana en Ferrol',
      agendaLinkLabel: 'Toda la agenda',
      institutionalText:
        'Asociación juvenil sin ánimo de lucro desde 2013 · Acreditada Erasmus+ y Cuerpo Europeo de Solidaridad · +200 jóvenes movidos',
      institutionalLinkHref: '/nosotros/',
      institutionalLogos: [
        { _type: 'partner', _key: randomUUID(), name: 'Erasmus+' },
        { _type: 'partner', _key: randomUUID(), name: 'Cuerpo Europeo de Solidaridad' },
        { _type: 'partner', _key: randomUUID(), name: 'Concello de Ferrol' },
        { _type: 'partner', _key: randomUUID(), name: 'Xunta de Galicia' },
      ],
    })
    .commit({ autoGenerateArrayKeys: true })
  console.log('home: actualizado.')
}

async function patchAgenda() {
  await client
    .patch('pageFerrol')
    .set({
      heroEyebrow: 'Esta semana en Ferrol',
      heroHeading: 'Planes en la Almendra, cada semana del año.',
      heroText: [
        toBlock(
          'Nada de esperar a irte de Erasmus para que pase algo: en Ferrol hay clubs, talleres y encuentros casi todas las semanas, la mayoría gratis. Esto es lo que tenemos entre manos ahora mismo.',
        ),
      ],
    })
    .commit()
  console.log('pageFerrol: actualizado.')

  await client
    .patch('pageFerrolEn')
    .set({
      heroEyebrow: 'This week in Ferrol',
      heroHeading: 'Local plans in Ferrol, every week of the year.',
      heroText: [
        toBlock(
          'You don’t need to wait for a mobility abroad for something to happen: Ferrol has clubs, workshops and meetups most weeks, most of them free. Here’s what’s on right now.',
        ),
      ],
    })
    .commit()
  console.log('pageFerrolEn: actualizado.')
}

async function patchNosotrosLegal() {
  const shared = {
    legalName: 'Asociación Xeración',
    legalCif: 'G70385091',
    legalAddress: 'Rúa Almendra 9, 15402 Ferrol',
    legalOid: 'E10060426',
    legalPic: '948920640',
  }

  await client.patch('pageNosotros').setIfMissing(shared).commit()
  console.log('pageNosotros: datos legales rellenados (solo los campos vacíos).')

  await client.patch('pageNosotrosEn').setIfMissing(shared).commit()
  console.log('pageNosotrosEn: datos legales rellenados (solo los campos vacíos).')
}

async function run() {
  await patchHome()
  await patchAgenda()
  await patchNosotrosLegal()
  console.log('Listo. Revisa en el Studio: logos institucionales, acreditaciones y memoria anual siguen sin foto/enlace real — súbelos a mano cuando los tengas.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
