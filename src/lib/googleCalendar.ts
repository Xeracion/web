export interface EventSummary {
  title?: string
  dateTime?: string
  location?: string
  description?: string
}

interface GoogleCalendarStart {
  dateTime?: string
  date?: string
}

interface GoogleCalendarApiItem {
  summary?: string
  description?: string
  location?: string
  start?: GoogleCalendarStart
}

interface GoogleCalendarApiResponse {
  items?: GoogleCalendarApiItem[]
}

// formatEventTime & co. read wall-clock time via getUTC*, so strip Google's real offset instead of converting through it.
function toNaiveIso(start?: GoogleCalendarStart): string | undefined {
  if (start?.dateTime) {
    const match = start.dateTime.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    return match ? `${match[0]}Z` : undefined
  }
  if (start?.date) return `${start.date}T00:00:00Z`
  return undefined
}

interface GetGoogleCalendarEventsOptions {
  timeMin?: Date
  timeMax?: Date
  maxResults?: number
}

export async function getGoogleCalendarEvents(
  calendarId: string | undefined,
  { timeMin = new Date(), timeMax, maxResults = 10 }: GetGoogleCalendarEventsOptions = {},
): Promise<EventSummary[]> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY
  if (!calendarId || !apiKey) return []

  const params = new URLSearchParams({
    key: apiKey,
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: String(maxResults),
    timeMin: timeMin.toISOString(),
  })
  if (timeMax) params.set('timeMax', timeMax.toISOString())

  try {
    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`,
      { next: { revalidate: 900 } },
    )
    if (!res.ok) return []

    const data: GoogleCalendarApiResponse = await res.json()
    return (data.items ?? []).map(
      (item): EventSummary => ({
        title: item.summary,
        dateTime: toNaiveIso(item.start),
        location: shortLocation(item.location),
        description: item.description,
      }),
    )
  } catch {
    return []
  }
}

const WEEKDAY_INDEX: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }

/**
 * Último instante (domingo, 23:59:59) de la semana natural en curso en hora
 * de Madrid. Sirve de `timeMax` para la agenda de la portada: «esta semana»
 * es de hoy al domingo, no los próximos siete días.
 */
export function endOfWeekMadrid(now: Date = new Date()): Date {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Madrid',
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now)
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ''
  const num = (type: string) => Number(get(type))

  // La hora de pared de Madrid leída como si fuese UTC: la diferencia con el
  // instante real es el desfase horario vigente.
  const wallAsUtc = Date.UTC(num('year'), num('month') - 1, num('day'), num('hour'), num('minute'), num('second'))
  const offsetMs = wallAsUtc - Math.floor(now.getTime() / 1000) * 1000
  const daysToSunday = 7 - (WEEKDAY_INDEX[get('weekday')] ?? 7)
  const sundayEndWall = Date.UTC(num('year'), num('month') - 1, num('day') + daysToSunday, 23, 59, 59)

  return new Date(sundayEndWall - offsetMs)
}

/**
 * Google guarda la dirección completa del sitio («Xeracion, Rúa Almendra, 9,
 * 15402 Ferrol, A Coruña, España»). En la agenda basta con el lugar: se corta
 * desde el código postal.
 */
function shortLocation(location?: string) {
  if (!location) return location
  const cut = location.split(/,\s*\d{5}\b/)[0].trim()
  return cut || location
}
