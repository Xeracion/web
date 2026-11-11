// Idiomas de la web: castellano en la raíz y gallego bajo /gl/.
//
// Solo tienen versión en gallego las páginas del menú principal (portada,
// agenda, experiencias y nosotros). El resto (preguntas, empresas, Paisanos,
// Speak Factor…) existen solo en castellano: desde el gallego se enlazan tal
// cual, y el selector de idioma en ellas lleva a la portada en gallego.

export type Locale = 'es' | 'gl'

export const LOCALES: Locale[] = ['es', 'gl']

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  gl: 'Galego',
}

export const OG_LOCALES: Record<Locale, string> = {
  es: 'es_ES',
  gl: 'gl_ES',
}

/** Páginas equivalentes en los dos idiomas. */
const PAGE_PAIRS: Array<Record<Locale, string>> = [
  { es: '/', gl: '/gl/' },
  { es: '/agenda/', gl: '/gl/axenda/' },
  { es: '/experiencias/', gl: '/gl/experiencias/' },
  { es: '/nosotros/', gl: '/gl/nos/' },
]

function withTrailingSlash(path: string) {
  return path.endsWith('/') ? path : `${path}/`
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/gl' || pathname.startsWith('/gl/') ? 'gl' : 'es'
}

/** La misma página en el otro idioma, o su portada si no existe. */
export function alternateHref(pathname: string, target: Locale): string {
  const path = withTrailingSlash(pathname)
  const pair = PAGE_PAIRS.find((p) => p.es === path || p.gl === path)
  if (pair) return pair[target]
  return target === 'gl' ? '/gl/' : '/'
}

/**
 * Traduce un enlace interno escrito en castellano (ej. '/agenda/#agenda',
 * '/experiencias/?filtro=gratis') a su equivalente en gallego si existe.
 * Los enlaces externos y las páginas que solo están en castellano se
 * devuelven tal cual.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === 'es' || !href.startsWith('/')) return href
  const match = href.match(/^([^?#]*)(.*)$/)
  const path = match?.[1] ?? href
  const rest = match?.[2] ?? ''
  const pair = PAGE_PAIRS.find((p) => p.es === withTrailingSlash(path))
  return pair ? `${pair.gl}${rest}` : href
}

/** Rutas equivalentes en los dos idiomas, para los hreflang de <head>. */
export function languageAlternates(pathname: string): Record<string, string> | undefined {
  const path = withTrailingSlash(pathname)
  const pair = PAGE_PAIRS.find((p) => p.es === path || p.gl === path)
  if (!pair) return undefined
  return { es: pair.es, gl: pair.gl, 'x-default': pair.es }
}
