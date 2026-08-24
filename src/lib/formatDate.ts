type Locale = 'es' | 'en'

const WEEKDAY_SHORT: Record<Locale, string[]> = {
  es: ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'],
  en: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
}

const WEEKDAY_LONG: Record<Locale, string[]> = {
  es: ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'],
  en: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
}

const MONTH_SHORT: Record<Locale, string[]> = {
  es: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
  en: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
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
