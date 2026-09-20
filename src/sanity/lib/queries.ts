import { cache } from 'react'
import type { PortableTextBlock } from '@portabletext/react'
import type { SanityImageSource } from '@sanity/image-url'

import { sanityFetch } from './live'

export type RichTextValue = PortableTextBlock[]

export interface ExperienciaData {
  titulo?: string
  slug?: string
  categoria?: string
  lugar?: string
  resumen?: string
  descripcion?: RichTextValue
  ambito?: string
  duracion?: string
  costeTipo?: string
  costeEtiqueta?: string
  imagen?: SanityImageSource
  colorBanda?: string
  enlaceExterno?: string
}

const EXPERIENCIA_CARD_PROJECTION = `
  titulo,
  "slug": slug.current,
  categoria,
  lugar,
  resumen,
  ambito,
  duracion,
  costeTipo,
  costeEtiqueta,
  imagen,
  colorBanda,
  enlaceExterno
`

const EXPERIENCIAS_QUERY = `*[_type == "experiencia" && activa == true] | order(orden asc, _createdAt asc){
  ${EXPERIENCIA_CARD_PROJECTION}
}`

export const getExperiencias = cache(async (): Promise<ExperienciaData[]> => {
  // Igual que getExperienciaSlugs: si Sanity no responde en build time (o en
  // producción, si el servicio está caído), la página se degrada a "sin
  // experiencias" en vez de tirar todo el build/render abajo.
  try {
    const { data } = await sanityFetch({ query: EXPERIENCIAS_QUERY })
    return (data as ExperienciaData[]) ?? []
  } catch (err) {
    console.error('No se pudieron obtener las experiencias:', err)
    return []
  }
})

const EXPERIENCIAS_DESTACADAS_QUERY = `*[_type == "experiencia" && activa == true && destacada == true] | order(orden asc, _createdAt asc){
  ${EXPERIENCIA_CARD_PROJECTION}
}`

export const getExperienciasDestacadas = cache(async (): Promise<ExperienciaData[]> => {
  try {
    const { data } = await sanityFetch({ query: EXPERIENCIAS_DESTACADAS_QUERY })
    return (data as ExperienciaData[]) ?? []
  } catch (err) {
    console.error('No se pudieron obtener las experiencias destacadas:', err)
    return []
  }
})

const EXPERIENCIA_BY_SLUG_QUERY = `*[_type == "experiencia" && activa == true && slug.current == $slug][0]{
  _id,
  ${EXPERIENCIA_CARD_PROJECTION},
  descripcion
}`

export const getExperienciaBySlug = cache(
  async (slug: string): Promise<(ExperienciaData & { _id?: string }) | null> => {
    const { data } = await sanityFetch({ query: EXPERIENCIA_BY_SLUG_QUERY, params: { slug } })
    return data as (ExperienciaData & { _id?: string }) | null
  },
)

const EXPERIENCIA_SLUGS_QUERY = `*[_type == "experiencia" && activa == true && !defined(enlaceExterno) && defined(slug.current)]{
  "slug": slug.current
}`

export const getExperienciaSlugs = cache(async (): Promise<string[]> => {
  // A diferencia del resto de queries, esta la llama generateStaticParams
  // en build time — si Sanity no responde ahí mismo se cae todo el build,
  // así que se degrada a "ninguna página pre-generada" en vez de fallar.
  try {
    const { data } = await sanityFetch({ query: EXPERIENCIA_SLUGS_QUERY })
    return ((data as { slug: string }[]) ?? []).map((item) => item.slug)
  } catch (err) {
    console.error('No se pudieron obtener los slugs de experiencia en build time:', err)
    return []
  }
})

export interface ConvocatoriaData {
  titulo?: string
  pais?: string
  fechaInicio?: string
  fechaFin?: string
  fechaLimite?: string
  plazas?: number
  enlaceInscripcion?: string
}

const CONVOCATORIAS_QUERY = `*[
  _type == "convocatoria" &&
  activa == true &&
  experiencia._ref == $id &&
  (!defined(fechaLimite) || fechaLimite >= $today)
] | order(fechaLimite asc){
  titulo, pais, fechaInicio, fechaFin, fechaLimite, plazas, enlaceInscripcion
}`

export const getConvocatoriasForExperiencia = cache(
  async (experienciaId: string): Promise<ConvocatoriaData[]> => {
    const today = new Date().toISOString().slice(0, 10)
    const { data } = await sanityFetch({
      query: CONVOCATORIAS_QUERY,
      params: { id: experienciaId, today },
    })
    return (data as ConvocatoriaData[]) ?? []
  },
)
