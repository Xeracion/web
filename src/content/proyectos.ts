import type { StatItem, Testimonial } from './types'

// Archivo de proyectos ya realizados (/proyectos/ y /proyectos/[slug]/).
// Cada ficha sale de la página que tenía el proyecto en el WordPress anterior
// (ficha o convocatoria) completada con la documentación del Drive de
// Xeración. Solo datos reales y cifras agregadas: nunca nombres, documentos
// ni contactos de participantes. Si falta un dato, el campo se queda vacío.

export interface ProyectoFoto {
  src: string
  alt: string
}

export interface ProyectoData {
  slug: string
  titulo: string
  /** H1 de la ficha: frase completa terminada en punto. */
  heroHeading: string
  anio: number
  /** Texto libre: «15–22 de abril de 2022». */
  fechas: string
  lugar: string
  /** Intercambio juvenil, Curso de formación, Voluntariado en equipo, Proyecto local, Evento… */
  formato: string
  /** Erasmus+, Cuerpo Europeo de Solidaridad… Solo en la ficha, nunca en titulares. */
  programa?: string
  /** Qué papel tuvo Xeración, si no fue el de organizar. */
  rol?: string
  /** Máx. 140 caracteres, para la tarjeta del archivo. */
  resumen: string
  descripcion: string[]
  /** Datos de la fila bajo la cabecera (Cuándo, Dónde, Quiénes…). */
  datos: StatItem[]
  actividades?: string[]
  resultados?: string[]
  paises?: string[]
  socios?: string[]
  imagen?: string
  imagenAlt?: string
  galeria?: ProyectoFoto[]
  voces?: Testimonial[]
  vocesNota?: string
  enlaces?: { label: string; href: string }[]
  /** Si el proyecto ya tiene página propia en esta web, la tarjeta lleva allí. */
  enlaceInterno?: string
  /** URLs del WordPress anterior que redirigen a la ficha (en next.config.ts). */
  urlsAntiguas?: string[]
}

export const pageProyectosEs = {
  heading: 'Lo que ya hemos hecho.',
  intro:
    'Intercambios, cursos, voluntariados y proyectos en Ferrol que ya terminaron. Aquí guardamos qué fue cada uno, dónde, con quién y cómo salió.',
  closingHeading: '¿Te apetece estar en el próximo?',
  closingText: 'Las experiencias que tenemos abiertas ahora están en el catálogo.',
  closingPrimaryLabel: 'Quiero ver las experiencias',
  closingSecondaryLabel: 'Quiero ver más proyectos',
}

export const proyectos: ProyectoData[] = []

/** Más recientes primero. */
export function getProyectos(): ProyectoData[] {
  return [...proyectos].sort((a, b) => b.anio - a.anio)
}

export function getProyectoBySlug(slug: string): ProyectoData | undefined {
  return proyectos.find((item) => item.slug === slug && !item.enlaceInterno)
}

export function getProyectoSlugs(): string[] {
  return proyectos.filter((item) => !item.enlaceInterno).map((item) => item.slug)
}

export function getProyectoHref(item: ProyectoData): string {
  return item.enlaceInterno ?? `/proyectos/${item.slug}/`
}
