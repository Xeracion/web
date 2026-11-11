import type { Locale } from './i18n'

export const CATEGORIA_LABELS: Record<string, string> = {
  camino: 'Camino',
  aventura: 'Aventura',
  vivirFuera: 'Vivir fuera',
  intercambio: 'Intercambio',
  local: 'Local',
  naturaleza: 'Naturaleza',
}

export const CATEGORIA_LABELS_GL: Record<string, string> = {
  camino: 'Camiño',
  aventura: 'Aventura',
  vivirFuera: 'Vivir fóra',
  intercambio: 'Intercambio',
  local: 'Local',
  naturaleza: 'Natureza',
}

export const CATEGORIA_LABELS_BY_LOCALE: Record<Locale, Record<string, string>> = {
  es: CATEGORIA_LABELS,
  gl: CATEGORIA_LABELS_GL,
}

export const AMBITO_LABELS_GL: Record<string, string> = {
  galicia: 'Galicia',
  europa: 'Europa',
}

export const DURACION_LABELS_GL: Record<string, string> = {
  finde: 'Unha fin de semana',
  semana: 'Unha semana',
  meses: 'Meses',
}

export const AMBITO_LABELS: Record<string, string> = {
  galicia: 'Galicia',
  europa: 'Europa',
}

export const DURACION_LABELS: Record<string, string> = {
  finde: 'Un finde',
  semana: 'Una semana',
  meses: 'Meses',
}

// Agrupación del catálogo cuando hay poca oferta activa (ver CLAUDE.md 4.4):
// con pocas tarjetas, los chips de filtro producen estados vacíos o de una
// sola tarjeta, que se leen peor que no filtrar. Por debajo del umbral se
// agrupa en estas tres secciones fijas en vez de mostrar chips.
export type CatalogGroupKey = 'ferrol' | 'caminos' | 'europa'

export const CATALOG_GROUPS: { key: CatalogGroupKey; label: string }[] = [
  { key: 'ferrol', label: 'En Ferrol y comarca' },
  { key: 'caminos', label: 'Caminos y naturaleza' },
  { key: 'europa', label: 'Por Europa' },
]

export const CATALOG_GROUP_LABELS_GL: Record<CatalogGroupKey, string> = {
  ferrol: 'En Ferrol e comarca',
  caminos: 'Camiños e natureza',
  europa: 'Por Europa',
}

export function groupForExperiencia(item: { categoria?: string; ambito?: string }): CatalogGroupKey {
  if (item.ambito === 'europa') return 'europa'
  if (item.categoria === 'local') return 'ferrol'
  return 'caminos'
}
