import { XMLParser } from 'fast-xml-parser'

export interface SubstackPost {
  title: string
  link: string
  pubDate?: string
  description?: string
  image?: string
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
}

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => NAMED_ENTITIES[name])
}

function stripHtml(text: string): string {
  return decodeEntities(text.replace(/<[^>]*>/g, '')).trim()
}

interface RssAttribute {
  '@_url'?: string
  '@_type'?: string
}

function firstAttribute(value: unknown): RssAttribute | undefined {
  if (Array.isArray(value)) return value[0]
  return value as RssAttribute | undefined
}

function extractImage(item: Record<string, unknown>): string | undefined {
  const enclosures = Array.isArray(item.enclosure)
    ? (item.enclosure as RssAttribute[])
    : item.enclosure
      ? [item.enclosure as RssAttribute]
      : []
  const imageEnclosure = enclosures.find((e) => e['@_type']?.startsWith('image') && e['@_url'])
  if (imageEnclosure?.['@_url']) return imageEnclosure['@_url']

  const media = firstAttribute(item['media:content'])
  if (media?.['@_url']) return media['@_url']

  const rawHtml = String(item['content:encoded'] ?? item.description ?? '')
  const match = rawHtml.match(/<img[^>]+src="([^"]+)"/)
  return match?.[1]
}

export async function getSubstackFeed(baseUrl: string, limit = 3): Promise<SubstackPost[]> {
  let origin: string
  try {
    origin = new URL(baseUrl).origin
  } catch {
    return []
  }

  try {
    const res = await fetch(`${origin}/feed`, { next: { revalidate: 3600 } })
    if (!res.ok) return []

    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
    const data = parser.parse(xml)
    const rawItems = data?.rss?.channel?.item
    const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : []

    return items.slice(0, limit).map(
      (item: Record<string, unknown>): SubstackPost => ({
        title: stripHtml(String(item.title ?? '')),
        link: String(item.link ?? origin),
        pubDate: item.pubDate ? String(item.pubDate) : undefined,
        description: item.description ? stripHtml(String(item.description)) : undefined,
        image: extractImage(item),
      }),
    )
  } catch {
    return []
  }
}

export function substackSubscribeUrl(baseUrl: string): string | undefined {
  try {
    return `${new URL(baseUrl).origin}/subscribe`
  } catch {
    return undefined
  }
}
