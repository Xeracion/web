import type { Metadata } from 'next'

import { languageAlternates } from './i18n'

const DEFAULT_IMAGES = [{ url: '/opengraph-image', width: 1200, height: 630 }]

interface PageMetadataInput {
  title?: string
  description?: string | string[]
  locale?: string
  /** Ruta de la página (ej. '/gl/axenda/'): añade canonical y los hreflang es/gl si tiene pareja. */
  path?: string
}

export function buildPageMetadata({ title, description: rawDescription, locale, path }: PageMetadataInput): Metadata {
  const description = Array.isArray(rawDescription) ? rawDescription.join(' ') : rawDescription
  const metadata: Metadata = {}

  if (title) {
    metadata.title = title
    metadata.openGraph = { title, images: DEFAULT_IMAGES }
    metadata.twitter = { title, card: 'summary_large_image', images: DEFAULT_IMAGES }
  }

  if (description) {
    metadata.description = description
    metadata.openGraph = { ...metadata.openGraph, description, images: DEFAULT_IMAGES }
    metadata.twitter = {
      ...metadata.twitter,
      description,
      card: 'summary_large_image',
      images: DEFAULT_IMAGES,
    }
  }

  if (locale) {
    metadata.openGraph = { ...metadata.openGraph, locale, images: DEFAULT_IMAGES }
  }

  if (path) {
    metadata.alternates = { canonical: path, languages: languageAlternates(path) }
  }

  return metadata
}
