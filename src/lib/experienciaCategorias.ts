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
