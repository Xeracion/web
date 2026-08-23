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

type SanityDoc = { _id: string; _type: string; [key: string]: unknown }

// Solo los documentos nuevos de /nosotros. Usa createIfNotExists para no
// pisar nada si alguno ya existiera (por ejemplo, si ya lo has editado a
// mano en el Studio).
const docs: SanityDoc[] = [
  {
    _id: 'pageNosotros',
    _type: 'pageNosotros',
    heroEyebrow: 'Desde 2013 · Ferrol, Galicia',
    heroHeading: 'No somos una ONG más. Somos tu red en Europa.',
    heroHeadingAccent: 'tu red en Europa',
    heroText:
      'Somos jóvenes que ayudamos a otros jóvenes a vivir su aventura europea. Sin protocolo, sin papeleo interminable — con la experiencia de más de una década haciendo esto.',
    heroStats: [
      { _type: 'statItem', _key: 'hero-stat-1', value: '500+', label: 'jóvenes participantes' },
      { _type: 'statItem', _key: 'hero-stat-2', value: '13', label: 'años activos' },
      { _type: 'statItem', _key: 'hero-stat-3', value: '30+', label: 'países' },
    ],
    historiaIntro: { _type: 'sectionIntro', eyebrow: 'Nuestra historia', heading: 'De una idea en un bar a una red por toda Europa.' },
    historiaParagraphs: [
      'Xeración nació en 2013 en Ferrol, cuando un grupo de amigos volvió de sus propios voluntariados europeos y se dio cuenta de que en la ciudad no había forma fácil de repetir la experiencia — ni de traer a nadie de fuera.',
      'El problema era simple: la información sobre programas europeos existía, pero estaba dispersa, en inglés técnico, y sin nadie cercano que acompañara el proceso paso a paso. Decidimos ser esa persona cercana.',
      'Trece años después seguimos con la misma idea: quitar de en medio el papeleo y la incertidumbre para que decir «me voy» sea lo más fácil de todo el viaje.',
    ],
    timeline: [
      { _type: 'timelineMilestone', _key: 'milestone-1', year: '2013', title: 'Fundación', description: 'Un grupo de amigos en Ferrol decide montar Xeración.' },
      { _type: 'timelineMilestone', _key: 'milestone-2', year: '2015', title: 'Primeros voluntarios europeos', description: 'Llegan a Ferrol los primeros jóvenes de fuera acogidos por la asociación.' },
      { _type: 'timelineMilestone', _key: 'milestone-3', year: '2021', title: 'Acreditación CES', description: 'Xeración se acredita como organización de acogida y envío del Cuerpo Europeo de Solidaridad.' },
      { _type: 'timelineMilestone', _key: 'milestone-4', year: '2024', title: '500+ participantes', description: 'Superamos los 500 jóvenes que han pasado por algún programa de Xeración.' },
      { _type: 'timelineMilestone', _key: 'milestone-5', year: '2025', title: 'Apertura Das Nest', description: 'Abrimos Das Nest, nuestro primer espacio de alojamiento propio para voluntariado.' },
    ],
    valoresIntro: { _type: 'sectionIntro', eyebrow: 'Cómo trabajamos', heading: 'Seis ideas que no negociamos.' },
    values: [
      { _type: 'valueItem', _key: 'value-1', icon: '✈️', title: 'Movilidad', description: 'Creemos que moverse por Europa debería estar al alcance de cualquier joven gallego, tenga o no dinero para pagárselo.' },
      { _type: 'valueItem', _key: 'value-2', icon: '🤝', title: 'Cooperación', description: 'Trabajamos con organizaciones de toda Europa que comparten la misma manera de hacer las cosas: sin prisa, con seguimiento real.' },
      { _type: 'valueItem', _key: 'value-3', icon: '🗳️', title: 'Democracia', description: 'Fomentamos que los jóvenes participen activamente en las decisiones que les afectan, dentro y fuera de la asociación.' },
      { _type: 'valueItem', _key: 'value-4', icon: '🌍', title: 'Tolerancia', description: 'Cada intercambio y cada voluntariado es una excusa para desmontar prejuicios, empezando por los nuestros.' },
      { _type: 'valueItem', _key: 'value-5', icon: '💚', title: 'Salud', description: 'Cuidamos el bienestar de quien se va y de quien llega — el acompañamiento no termina cuando sube al avión.' },
      { _type: 'valueItem', _key: 'value-6', icon: '🌿', title: 'Ecología', description: 'Priorizamos el tren cuando es posible y elegimos proyectos que dejan huella positiva en el sitio que los acoge.' },
    ],
    equipoIntro: { _type: 'sectionIntro', eyebrow: 'Quién está detrás', heading: 'El equipo ahora mismo.' },
    teamMembers: [
      { _type: 'teamMember', _key: 'member-1', name: 'Fran Sequeiro', role: 'Coordinación', linkUrl: 'https://linkedin.com/in/fransequeiro' },
      { _type: 'teamMember', _key: 'member-2', name: 'Amélie Arles', role: 'Voluntaria · Francia' },
      { _type: 'teamMember', _key: 'member-3', name: 'Caitlin Wessels', role: 'Voluntaria · Países Bajos' },
      { _type: 'teamMember', _key: 'member-4', name: 'Marie Salaün', role: 'Voluntaria · Francia' },
    ],
    volunteersNumber: '60+',
    volunteersSubtitle: 'voluntarios europeos de más de 20 países han pasado por Xeración desde 2013.',
    volunteersCtaLabel: 'Quiero ser el próximo →',
    volunteersCtaUrl: '/irse/',
    iniciativasIntro: { _type: 'sectionIntro', eyebrow: 'Más allá del voluntariado', heading: 'Tres proyectos propios.' },
    iniciativas: [
      { _type: 'initiative', _key: 'initiative-1', icon: '🏡', name: 'Das Nest', description: 'Nuestro espacio de alojamiento para voluntariado en Ferrol, pensado y gestionado por quienes ya pasaron por aquí.', colorScheme: 'blue' },
      { _type: 'initiative', _key: 'initiative-2', icon: '🌿', name: 'Building Nature', description: 'Proyectos de voluntariado ambiental en la ría de Ferrol: limpiezas de costa, reforestación, sensibilización.', colorScheme: 'green' },
      { _type: 'initiative', _key: 'initiative-3', icon: '🎤', name: 'Speak Factor', description: 'Talleres y clubs de idiomas abiertos a toda la comarca, llevados por nuestros propios voluntarios internacionales.', colorScheme: 'orange' },
    ],
    partnersIntro: { _type: 'sectionIntro', eyebrow: 'Con quién trabajamos' },
    partners: ['ERASMUS+', 'Cuerpo Europeo de Solidaridad', 'Eurodesk', 'Xunta de Galicia', 'Concello de Ferrol', 'Google for Nonprofits'],
    closingHeading: '¿Listo para vivir tu aventura europea?',
    closingText: 'Todas nuestras oportunidades están financiadas. El único requisito es querer.',
  },
  {
    _id: 'testimonial-tasos',
    _type: 'testimonial',
    quote: 'Vine a Ferrol sin conocer a nadie. Salí con una segunda familia repartida por media Europa.',
    name: 'Tasos Batzonis',
    originCity: 'Grecia',
    program: 'ESC',
    language: 'es',
    displaySize: 'mediano',
    route: 'nosotros',
  },
  {
    _id: 'testimonial-martina',
    _type: 'testimonial',
    quote: 'Pensé que sería solo un año raro en mi carrera. Fue el año que más aprendí de mí misma.',
    name: 'Martina Aramini',
    originCity: 'Italia',
    program: 'ESC',
    language: 'es',
    displaySize: 'mediano',
    route: 'nosotros',
  },
  {
    _id: 'testimonial-linda',
    _type: 'testimonial',
    quote: 'Nadie me avisó de que echaría tanto de menos la lluvia de Ferrol al volver a casa.',
    name: 'Linda Pūdāne',
    originCity: 'Letonia',
    program: 'ESC',
    language: 'es',
    displaySize: 'mediano',
    route: 'nosotros',
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
