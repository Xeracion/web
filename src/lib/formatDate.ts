const WEEKDAY_SHORT = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']
const WEEKDAY_LONG = [
  'DOMINGO',
  'LUNES',
  'MARTES',
  'MIÉRCOLES',
  'JUEVES',
  'VIERNES',
  'SÁBADO',
]

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export function formatEventTime(iso: string) {
  const date = new Date(iso)
  return `${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`
}

export function formatEventWeekdayShort(iso: string) {
  return WEEKDAY_SHORT[new Date(iso).getUTCDay()]
}

export function formatEventWeekdayLong(iso: string) {
  return WEEKDAY_LONG[new Date(iso).getUTCDay()]
}

const MONTH_SHORT = [
  'ENE',
  'FEB',
  'MAR',
  'ABR',
  'MAY',
  'JUN',
  'JUL',
  'AGO',
  'SEP',
  'OCT',
  'NOV',
  'DIC',
]

export function formatEventDay(iso: string) {
  return pad(new Date(iso).getUTCDate())
}

export function formatEventMonthShort(iso: string) {
  return MONTH_SHORT[new Date(iso).getUTCMonth()]
}
