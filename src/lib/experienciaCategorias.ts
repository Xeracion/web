export const CATEGORIA_LABELS: Record<string, string> = {
  camino: 'Camino',
  aventura: 'Aventura',
  vivirFuera: 'Vivir fuera',
  intercambio: 'Intercambio',
  local: 'Local',
  naturaleza: 'Naturaleza',
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

export function groupForExperiencia(item: { categoria?: string; ambito?: string }): CatalogGroupKey {
  if (item.ambito === 'europa') return 'europa'
  if (item.categoria === 'local') return 'ferrol'
  return 'caminos'
}
