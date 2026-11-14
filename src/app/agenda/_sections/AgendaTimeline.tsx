import { Container } from '@/components/Container'
import type { SectionIntro } from '@/content/types'
import { formatEventDay, formatEventMonthShort, formatEventTime, formatEventWeekdayShort } from '@/lib/formatDate'
import type { EventSummary } from '@/lib/googleCalendar'

import styles from './AgendaTimeline.module.css'

interface AgendaTimelineProps {
  intro?: SectionIntro
  events: EventSummary[]
  locale?: 'es' | 'gl'
}

const EMPTY_MESSAGE = {
  es: 'Todavía no hay nada programado para los próximos catorce días. Escríbenos por WhatsApp y te contamos lo que viene.',
  gl: 'Aínda non hai nada programado para os próximos catorce días. Escríbenos por WhatsApp e contámosche o que vén.',
}

// Casi todo es en la oficina: el lugar solo se enseña cuando es otro.
function isOwnVenue(location?: string) {
  return !location || /xeraci|almendra/i.test(location)
}

export function AgendaTimeline({ intro, events, locale = 'es' }: AgendaTimelineProps) {
  return (
    <Container as="section" id="agenda" className={styles.section}>
      {intro?.heading && <h2>{intro.heading}</h2>}
      {events.length === 0 ? (
        <p className={styles.empty}>{EMPTY_MESSAGE[locale]}</p>
      ) : (
        <ul className={styles.list} data-reveal-stagger>
          {events.map((event, i) => (
            <li key={i} className={styles.row}>
              <div className={styles.date}>
                <span className={styles.weekday}>
                  {event.dateTime && formatEventWeekdayShort(event.dateTime, locale)}
                </span>
                <span className={styles.day}>{event.dateTime && formatEventDay(event.dateTime)}</span>
                <span className={styles.month}>
                  {event.dateTime && formatEventMonthShort(event.dateTime, locale)}
                </span>
              </div>
              <div>
                <p className={styles.title}>{event.title}</p>
                <p className={styles.meta}>
                  {event.dateTime && formatEventTime(event.dateTime)}
                  {isOwnVenue(event.location) ? '' : ` · ${event.location}`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
