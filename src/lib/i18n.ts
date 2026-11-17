// Idiomas de la web: castellano en la raíz, gallego bajo /gl/ e inglés.
//
// Solo tienen versión en gallego las páginas del menú principal (portada,
// agenda, experiencias y nosotros). El resto (preguntas, empresas, Paisanos,
// Speak Factor…) existen solo en castellano: desde el gallego se enlazan tal
// cual, y el selector de idioma en ellas lleva a la portada en gallego.
//
// El inglés no es una traducción de la web: son tres páginas para socios,
// instituciones y voluntarios europeos (/en/, /volunteering/ e
// /internships/, las dos últimas en su URL del WordPress por SEO).

export type Locale = 'es' | 'gl' | 'en'

export const LOCALES: Locale[] = ['es', 'gl', 'en']

export const LOCALE_NAMES: Record<Locale, string> = {
  es: 'Español',
  gl: 'Galego',
  en: 'English',
}

export const OG_LOCALES: Record<Locale, string> = {
  es: 'es_ES',
  gl: 'gl_ES',
  en: 'en_GB',
}

/** Páginas equivalentes en los dos idiomas. */
export const PAGE_PAIRS: Array<Record<'es' | 'gl', string>> = [
  { es: '/', gl: '/gl/' },
  { es: '/agenda/', gl: '/gl/axenda/' },
  { es: '/experiencias/', gl: '/gl/experiencias/' },
  { es: '/nosotros/', gl: '/gl/nos/' },
  { es: '/nosotros/equipo/', gl: '/gl/nos/equipo/' },
]

/** Páginas en inglés. Su equivalente en castellano, si lo hay, para el selector. */
export const EN_PAGES: Array<{ en: string; es: string }> = [
  { en: '/en/', es: '/' },
  { en: '/volunteering/', es: '/experiencias/' },
  { en: '/internships/', es: '/empresas/' },
]

/** Portada de cada idioma. */
export const HOME_HREF: Record<Locale, string> = { es: '/', gl: '/gl/', en: '/en/' }

function withTrailingSlash(path: string) {
  return path.endsWith('/') ? path : `${path}/`
}

export function localeFromPath(pathname: string): Locale {
  const path = withTrailingSlash(pathname)
  if (path.startsWith('/gl/')) return 'gl'
  if (path.startsWith('/en/') || EN_PAGES.some((page) => page.en === path)) return 'en'
  return 'es'
}

/** Las versiones de una página en cada idioma (solo las que existen). */
function versions(pathname: string): Partial<Record<Locale, string>> {
  const path = withTrailingSlash(pathname)
  const enEntry = EN_PAGES.find((page) => page.en === path)
  const esPath = enEntry?.es ?? PAGE_PAIRS.find((p) => p.gl === path)?.es ?? path
  const pair = PAGE_PAIRS.find((p) => p.es === esPath)
  const en = enEntry?.en ?? EN_PAGES.find((page) => page.es === esPath)?.en
  const result: Partial<Record<Locale, string>> = {}
  if (pair || enEntry || localeFromPath(path) === 'es') result.es = esPath
  if (pair) result.gl = pair.gl
  if (en) result.en = en
  return result
}

/** La misma página en otro idioma, o la portada de ese idioma si no existe. */
export function alternateHref(pathname: string, target: Locale): string {
  const path = withTrailingSlash(pathname)
  if (localeFromPath(path) === target) return path
  return versions(path)[target] ?? HOME_HREF[target]
}

/**
 * Traduce un enlace interno escrito en castellano (ej. '/agenda/#agenda',
 * '/experiencias/?filtro=gratis') a su equivalente en gallego si existe.
 * Los enlaces externos y las páginas que solo están en castellano se
 * devuelven tal cual.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (locale !== 'gl' || !href.startsWith('/')) return href
  const match = href.match(/^([^?#]*)(.*)$/)
  const path = match?.[1] ?? href
  const rest = match?.[2] ?? ''
  const pair = PAGE_PAIRS.find((p) => p.es === withTrailingSlash(path))
  return pair ? `${pair.gl}${rest}` : href
}

/**
 * Rutas equivalentes para los hreflang de <head>. Solo las traducciones de
 * verdad (castellano y gallego): las páginas en inglés no traducen a las
 * castellanas (/volunteering/ no es /experiencias/), así que no se declaran
 * como alternativas para que Google no las intercambie en los resultados.
 */
export function languageAlternates(pathname: string): Record<string, string> | undefined {
  if (localeFromPath(pathname) === 'en') return undefined
  const { es, gl } = versions(pathname)
  if (!es || !gl) return undefined
  return { es, gl, 'x-default': es }
}
