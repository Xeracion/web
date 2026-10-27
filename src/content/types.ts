// Tipos compartidos para el contenido hardcodeado de src/content/. Son la
// versión "sin Sanity" de los objetos que antes vivían en el schema: mismos
// campos, sin _type/_key, y con `image` como ruta estática (o undefined,
// en cuyo caso PhotoPlaceholder sigue mostrando el gradiente + etiqueta de
// siempre) en vez de una referencia de Sanity.

export interface StatItem {
  value: string
  label: string
}

export interface SectionIntro {
  heading?: string
}

export interface TeamMember {
  name: string
  role?: string
  image?: string
  linkUrl?: string
}

export interface Partner {
  name: string
  image?: string
}

export interface ValueItem {
  icon: string
  title: string
  description?: string
}

export interface Initiative {
  icon: string
  name: string
  description?: string
  url?: string
  colorScheme?: 'blue' | 'green' | 'orange'
}

export interface TimelineMilestone {
  year: string
  title: string
  description?: string
}

export interface Testimonial {
  quote: string | string[]
  name: string
  originCity?: string
  destinationCity?: string
  program?: string
  year?: number
  image?: string
}

export interface FixedProgram {
  name: string
  schedule?: string
  description?: string
}

export interface Faq {
  question: string
  answer: string | string[]
}

export interface Feature {
  title: string
  text?: string | string[]
}

export interface PaisanoBlock {
  type: 'p' | 'heading'
  text: string
}

export interface Paisano {
  slug: string
  name: string
  summary: string
  lead: string
  pullQuote?: string
  image: string
  imageAlt: string
  imageFocus: string
  body: PaisanoBlock[]
}
