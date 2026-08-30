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

// Contenido adaptado de https://xeracion.org/mentores/ al sistema de diseño
// actual (mismos componentes que /ferrol/, acento teal). Usa createIfNotExists
// para no pisar nada si ya lo hubieras editado a mano en el Studio.
const docs: SanityDoc[] = [
  {
    _id: 'pageMentores',
    _type: 'pageMentores',
    heroEyebrow: 'Adopta un extranjero',
    heroHeading: 'Viaja sin salir de casa: hazte mentor de un voluntario europeo en Ferrol.',
    heroText: [
      toBlock(
        'Durante todo el año recibimos voluntarios europeos en Ferrol, gente joven que se queda entre 2 y 10 meses desarrollando su Voluntariado Europeo. Adaptarse a una ciudad y una cultura nuevas no es fácil — hasta ir al banco se convierte en una aventura. Queremos que ese proceso sea lo más sencillo posible, y para eso hace falta gente de aquí.',
      ),
    ],
    heroImageCaption: 'foto editorial · mentor y voluntaria paseando por Ferrol Vello',
    heroCtaLabel: 'Apúntame',
    heroCtaHref: 'mailto:info@xeracion.org',
    whyIntro: {
      _type: 'sectionIntro',
      eyebrow: 'A quién buscamos',
      heading: 'Gente activa con ganas de enseñar su ciudad.',
    },
    whyText: [
      toBlock(
        'Buscamos personas con algo de tiempo libre, capaces de comunicarse en inglés y con ganas de unirse al club de los mejores embajadores que puede tener Ferrol. Tu trabajo: ayudar a los voluntarios a integrarse en la ciudad, descubrirla, disfrutarla y sentirse como en casa.',
      ),
    ],
    beneficiosIntro: {
      _type: 'sectionIntro',
      eyebrow: 'Qué vas a ganar',
      heading: 'Tres motivos para apuntarte.',
    },
    beneficios: [
      {
        _type: 'valueItem',
        _key: randomUUID(),
        icon: '🏙️',
        title: 'Redescubrirás Ferrol',
        description:
          'Aprende historia local, visita museos, descubre playas nuevas. A veces hace falta una excusa para recorrer los rincones que aún no conoces — ¿qué mejor que enseñárselos a alguien de fuera?',
      },
      {
        _type: 'valueItem',
        _key: randomUUID(),
        icon: '✈️',
        title: 'Viajarás sin salir de casa',
        description:
          'Para descubrir una cultura nueva, probar otra cocina o aprender un idioma normalmente hay que subirse a un avión. Aquí ese país viene a tu encuentro — mucho más fácil, ¿no?',
      },
      {
        _type: 'valueItem',
        _key: randomUUID(),
        icon: '🤝',
        title: 'Harás nuevas amistades',
        description:
          'Formarás parte de un grupo de gente activa, viajera y que habla inglés. Conocerás personas de otros países con quienes organizar fiestas y excursiones.',
      },
    ],
    stats: [
      { _type: 'statItem', _key: randomUUID(), value: '+10', label: 'voluntarios extranjeros acompañados' },
      { _type: 'statItem', _key: randomUUID(), value: '15', label: 'mentores locales activos' },
    ],
    testimoniosIntro: { _type: 'sectionIntro', eyebrow: 'Voces de mentores', heading: 'Experiencias de mentores.' },
    closingHeading: '¿Te apuntas de mentor?',
    closingText: [
      toBlock('Sin curso previo ni compromiso largo. Solo hace falta tener ganas de enseñar tu ciudad.'),
    ],
  },
  {
    _id: 'testimonial-mentores-barbara',
    _type: 'testimonial',
    quote: [toBlock('He practicado inglés sin salir de casa.')],
    name: 'Barbara',
    originCity: 'Italia',
    language: 'es',
    displaySize: 'mediano',
    route: 'mentores',
  },
  {
    _id: 'testimonial-mentores-laura',
    _type: 'testimonial',
    quote: [toBlock('É unha experiencia que como persoa che fai medrar e aprender moito.')],
    name: 'Laura',
    originCity: 'Italia',
    language: 'gl',
    displaySize: 'mediano',
    route: 'mentores',
  },
  {
    _id: 'testimonial-mentores-miguel',
    _type: 'testimonial',
    quote: [toBlock('Nunca pensé que podría ver la ciudad con otros ojos.')],
    name: 'Miguel',
    originCity: 'Italia',
    language: 'es',
    displaySize: 'mediano',
    route: 'mentores',
  },
]

async function run() {
  console.log(`Creando ${docs.length} documentos nuevos en ${dataset} (sin pisar nada existente)...`)
  const tx = docs.reduce((t, d) => t.createIfNotExists(d), client.transaction())
  await tx.commit()
  console.log('Listo.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
