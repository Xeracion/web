import type { EventSummary } from '@/sanity/lib/queries'

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
        location: item.location,
        description: item.description,
      }),
    )
  } catch {
    return []
  }
}
