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

// Contenido de ejemplo para el catálogo de experiencias (pivote de /irse/ a
// /experiencias/, luego ampliado con las actividades locales recurrentes y
// las ediciones anteriores — ver CLAUDE.md 4.4). Usa createIfNotExists así
// que no pisa nada si ya has editado estos documentos a mano en el Studio.
// Las primeras ocho cubren los siete chips de filtro del catálogo (Todas ·
// En Galicia · Por Europa · Un finde · Una semana · Meses · Sin coste); las
// cuatro últimas son actividades locales permanentes — edítalas o bórralas
// libremente, son solo un punto de partida.
const experiencias: SanityDoc[] = [
  {
    _id: 'experiencia-camino-santiago',
    _type: 'experiencia',
    titulo: 'Camino de Santiago desde Ferrol',
    slug: { _type: 'slug', current: 'camino-de-santiago-desde-ferrol' },
    categoria: 'camino',
    lugar: 'Ferrol → Santiago',
    resumen: 'Cinco días caminando hasta Compostela con un grupo de Xeración. En grupo se hace más corto.',
    descripcion: [
      toBlock(
        'Salimos de Ferrol y llegamos a Santiago en cinco etapas, durmiendo en albergues y comiendo lo que se tercie por el camino. No hace falta experiencia previa: se adapta el ritmo del grupo a quien más lo necesite.',
      ),
      toBlock('Llevamos la logística resuelta — tú solo tienes que poner las piernas.'),
    ],
    ambito: 'galicia',
    duracion: 'semana',
    costeTipo: 'pago',
    costeEtiqueta: 'Desde 90 €',
    colorBanda: '#5DCAA5',
    destacada: true,
    activa: true,
    orden: 1,
    language: 'es',
  },
  {
    _id: 'experiencia-fragas-eume',
    _type: 'experiencia',
    titulo: 'Voluntariado ambiental en las Fragas do Eume',
    slug: { _type: 'slug', current: 'voluntariado-fragas-do-eume' },
    categoria: 'naturaleza',
    lugar: 'Fragas do Eume',
    resumen: 'Un fin de semana limpiando sendas y plantando especies autóctonas en uno de los últimos bosques atlánticos.',
    descripcion: [
      toBlock(
        'Pasamos el finde en las Fragas do Eume ayudando a mantener las sendas y a plantar especies autóctonas junto a guardas forestales. Se duerme en el propio parque natural.',
      ),
    ],
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#9FE1CB',
    destacada: true,
    activa: true,
    orden: 2,
    language: 'es',
  },
  {
    _id: 'experiencia-ces-cracovia',
    _type: 'experiencia',
    titulo: 'Voluntariado europeo en Cracovia',
    slug: { _type: 'slug', current: 'voluntariado-europeo-cracovia' },
    categoria: 'vivirFuera',
    lugar: 'Ferrol → Cracovia',
    resumen: 'De 2 a 12 meses de voluntariado en Polonia. Alojamiento, comida y bolsillo cubiertos por el Cuerpo Europeo de Solidaridad.',
    descripcion: [
      toBlock(
        'Te vas a Cracovia a trabajar en un proyecto social o cultural con una organización socia, de 2 a 12 meses. El Cuerpo Europeo de Solidaridad cubre el viaje, el alojamiento, la comida y un dinero de bolsillo mensual — tú solo pones las ganas.',
      ),
      toBlock('Antes de irte te acompañamos con toda la documentación y la preparación.'),
    ],
    ambito: 'europa',
    duracion: 'meses',
    costeTipo: 'financiado',
    costeEtiqueta: 'Te lo paga Europa',
    colorBanda: '#AFA9EC',
    destacada: true,
    activa: true,
    orden: 3,
    language: 'es',
  },
  {
    _id: 'experiencia-intercambio-lisboa',
    _type: 'experiencia',
    titulo: 'Intercambio juvenil en Lisboa',
    slug: { _type: 'slug', current: 'intercambio-juvenil-lisboa' },
    categoria: 'intercambio',
    lugar: 'Ferrol → Lisboa',
    resumen: 'Una semana de talleres y actividades con jóvenes de cuatro países. Erasmus+ paga viaje y estancia.',
    descripcion: [
      toBlock(
        'Una semana en Lisboa con jóvenes de otros tres países europeos, con talleres sobre participación juvenil, algo de turismo y muchas cenas compartidas. Financiado por Erasmus+: viaje, alojamiento y comida cubiertos.',
      ),
    ],
    ambito: 'europa',
    duracion: 'semana',
    costeTipo: 'financiado',
    costeEtiqueta: 'Te lo paga Europa',
    colorBanda: '#CECBF6',
    destacada: false,
    activa: true,
    orden: 4,
    language: 'es',
  },
  {
    _id: 'experiencia-offline-club',
    _type: 'experiencia',
    titulo: 'Offline Club',
    slug: { _type: 'slug', current: 'offline-club' },
    categoria: 'local',
    lugar: 'Casa da Xuventude, Ferrol',
    resumen: 'Cada martes en la Almendra: juegos de mesa, manualidades o lo que traiga el grupo esa semana. Gratis.',
    descripcion: [
      toBlock(
        'Todos los martes abrimos la Casa da Xuventude para desconectar un rato del móvil: juegos de mesa, manualidades, alguna charla. Sin apuntarte antes, solo te presentas.',
      ),
    ],
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#E1F5EE',
    destacada: false,
    activa: true,
    orden: 5,
    language: 'es',
  },
  {
    _id: 'experiencia-tc-berlin',
    _type: 'experiencia',
    titulo: 'Curso de formación en Berlín',
    slug: { _type: 'slug', current: 'curso-de-formacion-berlin' },
    categoria: 'aventura',
    lugar: 'Ferrol → Berlín',
    resumen: 'Una semana de Training Course europeo sobre facilitación de grupos. Todo pagado por Erasmus+.',
    ambito: 'europa',
    duracion: 'semana',
    costeTipo: 'financiado',
    costeEtiqueta: 'Te lo paga Europa',
    colorBanda: '#F5C4B3',
    destacada: false,
    activa: true,
    orden: 6,
    language: 'es',
    enlaceExterno: 'https://xeracion.substack.com',
  },
  {
    _id: 'experiencia-costa-artabra',
    _type: 'experiencia',
    titulo: 'Ruta de senderismo por la Costa Ártabra',
    slug: { _type: 'slug', current: 'ruta-senderismo-costa-artabra' },
    categoria: 'aventura',
    lugar: 'Costa Ártabra',
    resumen: 'Un finde de ruta costera con acampada incluida. Grupos reducidos, guía local.',
    descripcion: [
      toBlock(
        'Recorremos parte de la Costa Ártabra en dos días, con una noche de acampada junto al mar. Grupos reducidos y guía local — solo hace falta ganas de andar.',
      ),
    ],
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'pago',
    costeEtiqueta: 'Desde 25 €',
    colorBanda: '#F0997B',
    destacada: false,
    activa: true,
    orden: 7,
    language: 'es',
  },
  {
    _id: 'experiencia-voluntariado-urbano-ferrol',
    _type: 'experiencia',
    titulo: 'Voluntariado urbano en Ferrol',
    slug: { _type: 'slug', current: 'voluntariado-urbano-ferrol' },
    categoria: 'local',
    lugar: 'Ferrol',
    resumen: 'Compromiso de varios meses ayudando en proyectos sociales del barrio de la Almendra. Formación incluida.',
    descripcion: [
      toBlock(
        'Un voluntariado de varios meses en proyectos sociales del centro de Ferrol: apoyo escolar, reparto de alimentos, acompañamiento a mayores. Te damos formación antes de empezar.',
      ),
    ],
    ambito: 'galicia',
    duracion: 'meses',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#9FE1CB',
    destacada: false,
    activa: true,
    orden: 8,
    language: 'es',
  },
  // Actividades locales recurrentes como experiencias de pleno derecho (ver
  // CLAUDE.md 4.4): no caducan, no tienen convocatoria con fecha, y compiten
  // en el catálogo en igualdad de condiciones con las experiencias que
  // implican viajar — para alguien de Ferrol, un club semanal es tan
  // "experiencia" como un voluntariado en Cracovia.
  {
    _id: 'experiencia-speak-factor',
    _type: 'experiencia',
    titulo: 'Speak Factor',
    slug: { _type: 'slug', current: 'speak-factor' },
    categoria: 'local',
    lugar: 'Casa da Xuventude, Ferrol',
    resumen: 'Talleres de conversación en inglés, francés y alemán, llevados por nuestros propios voluntarios internacionales.',
    descripcion: [
      toBlock(
        'Cada semana montamos un taller de conversación distinto — inglés, francés, alemán — según qué voluntario internacional tengamos en Ferrol en ese momento. Nivel bajo, medio o alto, todo el mundo encuentra su sitio.',
      ),
      toBlock('Gratis y sin apuntarte antes: solo te presentas en la Almendra 9.'),
    ],
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#9FE1CB',
    destacada: false,
    activa: true,
    orden: 9,
    language: 'es',
  },
  {
    _id: 'experiencia-building-nature',
    _type: 'experiencia',
    titulo: 'Building Nature',
    slug: { _type: 'slug', current: 'building-nature' },
    categoria: 'local',
    lugar: 'Ría de Ferrol',
    resumen: 'Limpiezas de costa, reforestación y sensibilización ambiental en la ría, con nuestro propio grupo de voluntariado verde.',
    descripcion: [
      toBlock(
        'Building Nature es nuestro grupo de voluntariado ambiental permanente: limpiezas de playa y ribera, jornadas de reforestación con especies autóctonas, y talleres de sensibilización en colegios de la comarca.',
      ),
      toBlock('Salidas puntuales durante todo el año — te avisamos por Instagram de la próxima.'),
    ],
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#5DCAA5',
    destacada: false,
    activa: true,
    orden: 10,
    language: 'es',
  },
  {
    _id: 'experiencia-cousateca',
    _type: 'experiencia',
    titulo: 'Cousateca',
    slug: { _type: 'slug', current: 'cousateca' },
    categoria: 'local',
    lugar: 'Casa da Xuventude, Ferrol',
    resumen: 'Banco de préstamo de herramientas y material para vecinos y voluntarios: de carpas a bicicletas.',
    descripcion: [
      toBlock(
        'La Cousateca es nuestro banco de objetos: herramientas, carpas, sacos de dormir, bicicletas, material de acampada. Lo que no usas cada día, alguien más lo necesita — lo prestamos gratis a cambio de devolverlo en condiciones.',
      ),
    ],
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#E1F5EE',
    destacada: false,
    activa: true,
    orden: 11,
    language: 'es',
  },
  {
    _id: 'experiencia-das-nest',
    _type: 'experiencia',
    titulo: 'Das Nest',
    slug: { _type: 'slug', current: 'das-nest' },
    categoria: 'local',
    lugar: 'Ferrol',
    resumen: 'Nuestro espacio de alojamiento para voluntariado en Ferrol, gestionado por quienes ya pasaron por aquí.',
    descripcion: [
      toBlock(
        'Das Nest es el piso compartido donde se alojan los voluntarios europeos que acogemos en Ferrol — pensado y llevado por gente que hizo su propio voluntariado antes. Si vienes con nosotros de intercambio o CES, tu alojamiento es aquí.',
      ),
    ],
    ambito: 'galicia',
    duracion: 'semana',
    costeTipo: 'gratis',
    costeEtiqueta: 'Incluido si vienes de voluntariado',
    colorBanda: '#0F6E56',
    destacada: false,
    activa: true,
    orden: 12,
    language: 'es',
  },
]

const ediciones: SanityDoc[] = [
  // Profundidad histórica para las experiencias con más recorrido — no
  // inventa cifras que no podamos sostener, son ejemplos razonables a
  // corregir con los datos reales de cada convocatoria pasada. `destacada`
  // solo en la más reciente de cada una, que es lo que activa el dato de
  // refuerzo en la tarjeta del catálogo (ver 4.4 en CLAUDE.md).
  {
    _id: 'edicion-camino-2024',
    _type: 'edicion',
    titulo: 'Camino de Santiago · primavera 2024',
    experiencia: { _type: 'reference', _ref: 'experiencia-camino-santiago' },
    anio: 2024,
    lugar: 'Ferrol → Santiago',
    participantes: 14,
    resumen: 'Cinco etapas, sin bajas por el camino. El grupo más numeroso hasta la fecha.',
    destacada: true,
  },
  {
    _id: 'edicion-camino-2022',
    _type: 'edicion',
    titulo: 'Camino de Santiago · primavera 2022',
    experiencia: { _type: 'reference', _ref: 'experiencia-camino-santiago' },
    anio: 2022,
    lugar: 'Ferrol → Santiago',
    participantes: 9,
    resumen: 'Primera edición tras la pausa de 2020-21. Grupo pequeño y muy unido.',
  },
  {
    _id: 'edicion-camino-2015',
    _type: 'edicion',
    titulo: 'Camino de Santiago · edición inaugural',
    experiencia: { _type: 'reference', _ref: 'experiencia-camino-santiago' },
    anio: 2015,
    lugar: 'Ferrol → Santiago',
    participantes: 6,
    resumen: 'La primera vez que lo organizamos, casi sin presupuesto. De ahí salió la idea de repetirlo cada año.',
  },
  {
    _id: 'edicion-cracovia-2023',
    _type: 'edicion',
    titulo: 'Voluntariado europeo en Cracovia · 2023',
    experiencia: { _type: 'reference', _ref: 'experiencia-ces-cracovia' },
    anio: 2023,
    lugar: 'Cracovia, Polonia',
    participantes: 2,
    paises: ['Polonia'],
    resumen: 'Dos voluntarios de Ferrol, ocho meses en un centro cultural del casco antiguo.',
    destacada: true,
  },
  {
    _id: 'edicion-cracovia-2021',
    _type: 'edicion',
    titulo: 'Voluntariado europeo en Cracovia · 2021',
    experiencia: { _type: 'reference', _ref: 'experiencia-ces-cracovia' },
    anio: 2021,
    lugar: 'Cracovia, Polonia',
    participantes: 1,
    paises: ['Polonia'],
    resumen: 'Nuestra primera plaza en esta organización socia, todavía en pandemia.',
  },
  {
    _id: 'edicion-building-nature-2025',
    _type: 'edicion',
    titulo: 'Limpieza de la ría · primavera 2025',
    experiencia: { _type: 'reference', _ref: 'experiencia-building-nature' },
    anio: 2025,
    lugar: 'Ría de Ferrol',
    participantes: 22,
    resumen: 'Tres kilómetros de costa limpiados en una mañana, con voluntarios de cinco países distintos.',
    destacada: true,
  },
  {
    _id: 'edicion-building-nature-2019',
    _type: 'edicion',
    titulo: 'Primera reforestación',
    experiencia: { _type: 'reference', _ref: 'experiencia-building-nature' },
    anio: 2019,
    lugar: 'Ría de Ferrol',
    participantes: 10,
    resumen: 'La campaña que arrancó Building Nature como iniciativa permanente de la asociación.',
  },
]

const convocatorias: SanityDoc[] = [
  {
    _id: 'convocatoria-camino-primavera',
    _type: 'convocatoria',
    titulo: 'Convocatoria de primavera',
    experiencia: { _type: 'reference', _ref: 'experiencia-camino-santiago' },
    pais: 'España',
    fechaInicio: '2026-05-14',
    fechaFin: '2026-05-18',
    fechaLimite: '2026-04-20',
    plazas: 16,
    enlaceInscripcion: 'mailto:info@xeracion.org?subject=Camino%20de%20Santiago%20-%20primavera',
    activa: true,
  },
  {
    _id: 'convocatoria-cracovia-otono',
    _type: 'convocatoria',
    titulo: 'Convocatoria de otoño',
    experiencia: { _type: 'reference', _ref: 'experiencia-ces-cracovia' },
    pais: 'Polonia',
    fechaInicio: '2026-10-01',
    fechaFin: '2027-03-31',
    fechaLimite: '2026-08-15',
    plazas: 2,
    enlaceInscripcion: 'mailto:info@xeracion.org?subject=Voluntariado%20Cracovia%20-%20oto%C3%B1o',
    activa: true,
  },
]

async function run() {
  const docs = [...experiencias, ...ediciones, ...convocatorias]
  console.log(`Creando ${docs.length} documentos nuevos en ${dataset} (sin pisar nada existente)...`)
  const tx = docs.reduce((t, d) => t.createIfNotExists(d), client.transaction())
  await tx.commit()
  console.log('Listo.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
