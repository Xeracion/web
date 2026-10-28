import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { formatEventDay, formatEventMonthShort, formatEventTime, formatEventWeekdayShort } from '@/lib/formatDate'
import type { EventSummary } from '@/lib/googleCalendar'

import styles from './Agenda.module.css'

interface AgendaProps {
  heading?: string
  linkLabel?: string
  events: EventSummary[]
  agendaHref?: string
}

// Versión compacta para la home: los próximos 2–3 eventos (fecha, nombre,
// lugar). Si no hay ninguno futuro, la sección entera desaparece.
export function Agenda({ heading, linkLabel, events, agendaHref = '/agenda/#agenda' }: AgendaProps) {
  const items = events.filter((e) => e.title).slice(0, 3)
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      <div className={styles.head}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {linkLabel && <ButtonLink href={agendaHref}>{linkLabel}</ButtonLink>}
      </div>
      <ul className={styles.list}>
        {items.map((event, i) => (
          <li key={i} className={styles.row}>
            {event.dateTime && (
              <span className={styles.date}>
                {formatEventWeekdayShort(event.dateTime)} {formatEventDay(event.dateTime)}{' '}
                {formatEventMonthShort(event.dateTime)} · {formatEventTime(event.dateTime)}
              </span>
            )}
            <span className={styles.name}>{event.title}</span>
            {event.location && <span className={styles.place}>{event.location}</span>}
          </li>
        ))}
      </ul>
    </Container>
  )
}
