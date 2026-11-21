import type { Metadata } from 'next'

import { languageAlternates } from './i18n'

const DEFAULT_IMAGES = [{ url: '/opengraph-image', width: 1200, height: 630 }]
const SITE_NAME = 'Xeración'

interface PageMetadataInput {
  title?: string
  /** El título ya lleva la marca: no se le añade «· Xeración» detrás. */
  absoluteTitle?: boolean
  description?: string | string[]
  locale?: string
  /** Ruta de la página (ej. '/gl/axenda/'): añade canonical, og:url y los hreflang si tiene pareja. */
  path?: string
}

/** Google corta la descripción hacia los 160 caracteres: se recorta en una palabra. */
function trimDescription(text: string, max = 160): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:·\s]+$/, '')}…`
}

export function buildPageMetadata({ title, absoluteTitle, description: rawDescription, locale, path }: PageMetadataInput): Metadata {
  const fullDescription = (Array.isArray(rawDescription) ? rawDescription.join(' ') : rawDescription)?.replace(/\*\*/g, '')
  const description = fullDescription && trimDescription(fullDescription)
  // openGraph y twitter de la página sustituyen enteros a los del layout:
  // se repiten aquí los campos comunes para que no se pierdan.
  const openGraph: NonNullable<Metadata['openGraph']> = {
    siteName: SITE_NAME,
    type: 'website',
    locale: locale ?? 'es_ES',
    images: DEFAULT_IMAGES,
  }
  const twitter: NonNullable<Metadata['twitter']> = { card: 'summary_large_image', images: DEFAULT_IMAGES }
  const metadata: Metadata = { openGraph, twitter }

  if (title) {
    metadata.title = absoluteTitle ? { absolute: title } : title
    openGraph.title = title
    twitter.title = title
  }

  if (description) {
    metadata.description = description
    openGraph.description = description
    twitter.description = description
  }

  if (path) {
    openGraph.url = path
    metadata.alternates = { canonical: path, languages: languageAlternates(path) }
  }

  return metadata
}
