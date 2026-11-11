import type { Locale } from './i18n'

const WEEKDAY_SHORT: Record<Locale, string[]> = {
  es: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
  gl: ['DOM', 'LUN', 'MAR', 'MÉR', 'XOV', 'VEN', 'SÁB'],
}

const WEEKDAY_LONG: Record<Locale, string[]> = {
  es: ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'],
  gl: ['DOMINGO', 'LUNS', 'MARTES', 'MÉRCORES', 'XOVES', 'VENRES', 'SÁBADO'],
}

const MONTH_SHORT: Record<Locale, string[]> = {
  es: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
  gl: ['XAN', 'FEB', 'MAR', 'ABR', 'MAI', 'XUÑ', 'XUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC'],
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export function formatEventTime(iso: string) {
  const date = new Date(iso)
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`
}

export function formatEventWeekdayShort(iso: string, locale: Locale = 'es') {
  return WEEKDAY_SHORT[locale][new Date(iso).getUTCDay()]
}

export function formatEventWeekdayLong(iso: string, locale: Locale = 'es') {
  return WEEKDAY_LONG[locale][new Date(iso).getUTCDay()]
}

export function formatEventDay(iso: string) {
  return pad(new Date(iso).getUTCDate())
}

export function formatEventMonthShort(iso: string, locale: Locale = 'es') {
  return MONTH_SHORT[locale][new Date(iso).getUTCMonth()]
}

export function formatDateShort(iso: string, locale: Locale = 'es') {
  const date = new Date(iso)
  const day = pad(date.getUTCDate())
  const month = MONTH_SHORT[locale][date.getUTCMonth()]
  return `${day} ${month} ${date.getUTCFullYear()}`
}
