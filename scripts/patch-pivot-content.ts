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
// `pageFerrolEn`, `pageNosotros`, `pageNosotrosEn` y `pageEn` ya existen (los
// creó scripts/seed.ts hace tiempo). Es seguro ejecutarlo más de una vez.
//
// orgStatsProjects, orgStatsCountries, orgProfilePdf y memoriaAnualUrl se
// dejan vacíos a propósito: son afirmaciones cuantitativas o un archivo real
// que no me invento — hay que rellenarlos a mano en el Studio cuando tengas
// las cifras/el PDF. orgStatsYears sí se calcula (activos desde 2013), y
// legalOid/legalPic/orgStatsOid/orgStatsPic reutilizan el OID/PIC real que
// diste (son el mismo identificador de organización en las dos páginas).

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
  const accreditationsEs = [
    { _type: 'partner', _key: randomUUID(), name: 'Acreditación Erasmus+ (envío, acogida y coordinación)' },
    { _type: 'partner', _key: randomUUID(), name: 'Acreditación Cuerpo Europeo de Solidaridad' },
  ]
  const accreditationsEn = [
    { _type: 'partner', _key: randomUUID(), name: 'Erasmus+ accreditation (sending, hosting & coordinating)' },
    { _type: 'partner', _key: randomUUID(), name: 'European Solidarity Corps accreditation' },
  ]

  await client
    .patch('pageNosotros')
    .setIfMissing({ ...shared, accreditations: accreditationsEs })
    .commit({ autoGenerateArrayKeys: true })
  console.log('pageNosotros: datos legales y acreditaciones rellenados (solo los campos vacíos).')

  await client
    .patch('pageNosotrosEn')
    .setIfMissing({ ...shared, accreditations: accreditationsEn })
    .commit({ autoGenerateArrayKeys: true })
  console.log('pageNosotrosEn: datos legales y acreditaciones rellenados (solo los campos vacíos).')
}

async function patchVolunteeringOrgs() {
  await client
    .patch('pageEn')
    .setIfMissing({
      forOrgsIntro: {
        _type: 'sectionIntro',
        eyebrow: 'For organisations',
        heading: 'Partner with Xeración.',
      },
      orgCardVolunteers: {
        _type: 'orgCard',
        title: 'Send us your volunteers',
        text: 'We host European Solidarity Corps volunteers in Ferrol for 2 to 12 months, with accommodation, a local mentor and a structured onboarding from day one.',
        ctaLabel: 'Talk to our team',
        ctaHref: 'mailto:info@xeracion.org?subject=ESC%20volunteers',
      },
      orgCardVetInterns: {
        _type: 'orgCard',
        title: 'Send us your VET interns',
        text: 'We welcome vocational training placements with the same support structure as our ESC volunteers: housing guidance, a local contact and a placement that matches their field.',
        ctaLabel: 'Talk to our team',
        ctaHref: 'mailto:info@xeracion.org?subject=VET%20interns',
      },
      orgCardHostOurs: {
        _type: 'orgCard',
        title: 'Host ours',
        text: 'We send volunteers and youth groups to partner projects across Europe. Tell us about your organisation and we’ll see where it fits.',
        ctaLabel: 'Propose a project',
        ctaHref: 'mailto:info@xeracion.org?subject=Host%20our%20volunteers',
      },
      orgCardPartnerships: {
        _type: 'orgCard',
        title: 'Strategic partnerships',
        text: 'KA2 cooperation, long-term networks, joint training courses. We’re open to multi-year partnerships that go beyond a single mobility.',
        ctaLabel: 'Start a conversation',
        ctaHref: 'mailto:info@xeracion.org?subject=Strategic%20partnership',
      },
      orgStatsYears: String(new Date().getFullYear() - 2013),
      orgStatsOid: 'E10060426',
      orgStatsPic: '948920640',
    })
    .commit()
  console.log(
    'pageEn: tarjetas "for organisations" y estadísticas rellenadas (solo los campos vacíos). ' +
      'orgStatsProjects, orgStatsCountries y orgProfilePdf siguen vacíos a propósito: rellénalos en el Studio cuando tengas las cifras reales y el PDF.',
  )
}

async function run() {
  await patchHome()
  await patchAgenda()
  await patchNosotrosLegal()
  await patchVolunteeringOrgs()
  console.log('Listo. Revisa en el Studio: logos institucionales (nombre puesto, falta subir la imagen), número de proyectos/países socios y el PDF de perfil siguen sin dato real — rellénalos a mano cuando los tengas.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
