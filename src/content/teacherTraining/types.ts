import type { Faq } from '../types'

// Cursos para profesorado (KA1): tipos comunes a las versiones en inglés,
// alemán, neerlandés, francés e italiano. Cada idioma rellena la misma forma; el `id`
// de cada curso enlaza las traducciones entre sí (hreflang).

export type TeacherTrainingLang = 'en' | 'de' | 'nl' | 'fr' | 'it'
export type TeacherCourseId = 'camino' | 'forest' | 'ai'

export interface CourseDay {
  day: number
  /** Lugar, etapa o tema del día. */
  place: string
  /** Contenido principal del día. */
  focus: string
  /** Segunda parte del día (tarde o sesión de cierre). */
  then: string
}

export interface TeacherCourse {
  id: TeacherCourseId
  slug: string
  /** Nombre oficial del curso (en inglés en todas las versiones: es el que verá el centro). */
  name: string
  /** Frase corta para la tarjeta del índice. */
  summary: string
  metaTitle: string
  metaDescription: string
  /** H1: frase completa terminada en punto. */
  heroHeading: string
  heroText: string[]
  heroImage: string
  heroImageAlt: string
  days: number
  fee: number
  groupMin: number
  groupMax: number
  /** Fechas de la primera edición. */
  datesLabel: string
  /** Fechas en corto para la tarjeta del índice. */
  shortDates: string
  startDate: string
  endDate: string
  place: string
  audience: string[]
  requirements: string
  trainers: string
  outcomes: string[]
  programmeNote?: string
  /** Rótulos de las tres líneas de cada día del programa. */
  programmeColumns: [string, string, string]
  programme: CourseDay[]
  method: string
  includes: string
  faqs: Faq[]
}

export interface TeacherTrainingHub {
  metaTitle: string
  metaDescription: string
  heroHeading: string
  heroText: string[]
  heroImage: string
  heroImageAlt: string
  coursesHeading: string
  coursesText: string
  fundingHeading: string
  fundingText: string[]
  fundingFacts: Array<{ label: string; value: string }>
  stepsHeading: string
  steps: Array<{ title: string; text: string }>
  extrasHeading: string
  shadowingHeading: string
  shadowingText: string
  stayHeading: string
  stayText: string
  trainersHeading: string
  trainersText: string
  trainersLinkLabel: string
  faqHeading: string
  /** Orden fijo: las fichas reutilizan la 1.ª (financiación), la 4.ª (factura) y la 6.ª (certificado). */
  faqs: Faq[]
  closingHeading: string
  closingText: string
  ctaLabel: string
  ctaDetailsLabel: string
}

/** Rótulos de la interfaz de las fichas y del índice. */
export interface TeacherTrainingUi {
  breadcrumb: string
  seeProgramme: string
  seeProgrammeArrow: string
  essentials: string
  costTag: string
  feeSentence: (fee: number, days: number) => string
  factDates: string
  factDuration: string
  factFee: string
  factGroup: string
  factPlace: string
  days: (n: number) => string
  group: (min: number, max: number) => string
  whoFor: string
  takeHome: string
  dayByDay: string
  day: string
  feeCovers: string
  included: string
  whoTeaches: string
  addShadowing: string
  beforeBook: string
  otherCourses: string
  howItWorks: string
  photo: string
  emailSubjectHub: string
  emailSubjectCourse: string
}

export interface TeacherTrainingContent {
  lang: TeacherTrainingLang
  /** Locale de Open Graph (en_GB, de_DE…). */
  ogLocale: string
  /** Ruta del índice, con barra final: '/teacher-training/', '/de/lehrerfortbildung/'… */
  basePath: string
  hub: TeacherTrainingHub
  ui: TeacherTrainingUi
  courses: TeacherCourse[]
}
