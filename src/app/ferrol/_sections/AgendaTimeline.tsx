import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { formatEventDay, formatEventMonthShort, formatEventTime } from '@/lib/formatDate'
import type { EventSummary, SectionIntroData } from '@/sanity/lib/queries'

import styles from './AgendaTimeline.module.css'

interface AgendaTimelineProps {
  intro?: SectionIntroData
  events: EventSummary[]
  locale?: 'es' | 'en'
}

const EMPTY_MESSAGE = {
  es: 'No hay nada programado en los próximos catorce días todavía. Vuelve pronto o pásate un martes por Offline Club.',
  en: 'Nothing scheduled for the next two weeks yet. Check back soon, or drop by Offline Club on a Tuesday.',
}

export function AgendaTimeline({ intro, events, locale = 'es' }: AgendaTimelineProps) {
  return (
    <Container as="section" id="agenda" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      {events.length === 0 ? (
        <p className={styles.empty}>{EMPTY_MESSAGE[locale]}</p>
      ) : (
        <ul className={styles.list}>
          {events.map((event, i) => (
            <li key={i} className={styles.row}>
              <div className={styles.date}>
                <span className={styles.day}>{event.dateTime && formatEventDay(event.dateTime)}</span>
                <span className={styles.month}>
                  {event.dateTime && formatEventMonthShort(event.dateTime, locale)}
                </span>
              </div>
              <div>
                <p className={styles.title}>{event.title}</p>
                <p className={styles.meta}>
                  {event.dateTime && formatEventTime(event.dateTime)}
                  {event.location ? ` · ${event.location}` : ''}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
