// El catálogo de experiencias vive aquí, en el código (antes estaba en
// Sanity). Para añadir, cambiar o retirar una experiencia se edita este
// archivo; el cambio sale publicado en el siguiente despliegue.
//
// Regla: solo datos reales. Si falta un dato (precio, fechas, foto), el campo
// se deja vacío; no se inventa.

export type ExperienciaCategoria = 'camino' | 'aventura' | 'vivirFuera' | 'intercambio' | 'local' | 'naturaleza'

export interface Convocatoria {
  titulo: string
  pais?: string
  /** Fechas en formato AAAA-MM-DD. */
  fechaInicio?: string
  fechaFin?: string
  fechaLimite?: string
  plazas?: number
  enlaceInscripcion?: string
}

export interface Edicion {
  titulo: string
  anio: number
  lugar?: string
  participantes?: number
  paises?: string[]
  resumen?: string
  /** Rutas de fotos en /public (ej. '/img/experiencias/itw-2026-1.webp'). */
  galeria?: string[]
  /** Si alguna edición está destacada, la tarjeta enseña «N ediciones desde AAAA». */
  destacada?: boolean
}

export interface ExperienciaData {
  titulo: string
  slug: string
  categoria: ExperienciaCategoria
  lugar?: string
  /** Lo que se lee en la tarjeta. Máximo 140 caracteres. */
  resumen: string
  /** Párrafos de la ficha propia. Admite **negrita** y *cursiva*. */
  descripcion?: string[]
  ambito: 'galicia' | 'europa'
  duracion?: 'finde' | 'semana' | 'meses'
  costeTipo: 'gratis' | 'financiado' | 'pago'
  costeEtiqueta: string
  /** Ruta de la foto en /public. Sin foto, la ficha enseña el marcador con gradiente. */
  imagen?: string
  imagenAlt?: string
  /** Color (hex) de la banda superior de la tarjeta. */
  colorBanda?: string
  /** Web propia de la experiencia: la tarjeta abre fuera y no hay ficha aquí. */
  enlaceExterno?: string
  /** Página de esta web que hace de ficha (ej. '/speakfactor/'). */
  enlaceInterno?: string
  /** Sale en el catálogo reducido de la portada. */
  destacada?: boolean
  /** false la retira de la web sin borrarla. */
  activa?: boolean
  convocatorias?: Convocatoria[]
  ediciones?: Edicion[]
}

// El orden de esta lista es el orden en que aparecen.
export const experiencias: ExperienciaData[] = [
  {
    titulo: 'Into the Wild',
    slug: 'into-the-wild',
    categoria: 'aventura',
    lugar: 'Fragas do Eume y O Forgoselo',
    resumen:
      'Un reto al aire libre por equipos, con gente joven de varios países. La última edición fueron 36 horas de monte.',
    ambito: 'galicia',
    costeTipo: 'financiado',
    costeEtiqueta: 'Financiada',
    colorBanda: '#0E3A2F',
    enlaceExterno: 'https://intothewildproject.com',
    destacada: true,
  },
  {
    titulo: 'Orgasmo Sonoro',
    slug: 'orgasmo-sonoro',
    categoria: 'local',
    lugar: 'Das Nest, A Capela',
    resumen:
      'Exploración musical con ceremonia del cacao y ejercicios de respiración. Grupos de 10 a 15 personas, solo mayores de 18.',
    ambito: 'galicia',
    duracion: 'finde',
    costeTipo: 'pago',
    costeEtiqueta: '19 €',
    colorBanda: '#4F8371',
    enlaceExterno: 'https://orgasmosonoro.com',
    destacada: true,
  },
  {
    titulo: 'Caminocrew',
    slug: 'caminocrew',
    categoria: 'camino',
    lugar: 'Ferrol → Santiago',
    resumen:
      'El Camino Inglés en grupo y en una semana: día de acogida, mochilas transportadas y celebración al llegar a Santiago.',
    ambito: 'galicia',
    duracion: 'semana',
    costeTipo: 'pago',
    costeEtiqueta: 'De pago',
    colorBanda: '#357DCA',
    enlaceExterno: 'https://caminocrew.com',
    destacada: true,
  },
  {
    titulo: 'Speak Factor',
    slug: 'speak-factor',
    categoria: 'local',
    lugar: 'Casa da Xuventude, Ferrol',
    resumen: 'Curso gratuito de oratoria en inglés desde 2017. Martes alternos a las 19:00.',
    ambito: 'galicia',
    costeTipo: 'gratis',
    costeEtiqueta: 'Sin coste',
    colorBanda: '#8FBCEF',
    enlaceInterno: '/speakfactor/',
  },
]

const activas = () => experiencias.filter((item) => item.activa !== false)

export function getExperiencias(): ExperienciaData[] {
  return activas()
}

export function getExperienciasDestacadas(): ExperienciaData[] {
  return activas().filter((item) => item.destacada)
}

/** Solo las que tienen ficha propia en /experiencias/[slug]/. */
export function getExperienciaBySlug(slug: string): ExperienciaData | undefined {
  return activas().find((item) => item.slug === slug && !item.enlaceExterno && !item.enlaceInterno)
}

export function getExperienciaSlugs(): string[] {
  return activas()
    .filter((item) => !item.enlaceExterno && !item.enlaceInterno)
    .map((item) => item.slug)
}

/** Convocatorias con plazo abierto (o sin plazo), por fecha límite. */
export function getConvocatoriasAbiertas(item: ExperienciaData, today = new Date()): Convocatoria[] {
  const hoy = today.toISOString().slice(0, 10)
  return (item.convocatorias ?? [])
    .filter((convocatoria) => !convocatoria.fechaLimite || convocatoria.fechaLimite >= hoy)
    .sort((a, b) => (a.fechaLimite ?? '9999').localeCompare(b.fechaLimite ?? '9999'))
}
