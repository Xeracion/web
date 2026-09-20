import type { Metadata } from 'next'

const DEFAULT_IMAGES = [{ url: '/opengraph-image', width: 1200, height: 630 }]

interface PageMetadataInput {
  title?: string
  description?: string | string[]
  locale?: string
}

export function buildPageMetadata({ title, description: rawDescription, locale }: PageMetadataInput): Metadata {
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

  return metadata
}
