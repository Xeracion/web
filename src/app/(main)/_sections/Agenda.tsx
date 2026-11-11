import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { formatEventDay, formatEventMonthShort, formatEventTime, formatEventWeekdayShort } from '@/lib/formatDate'
import type { EventSummary } from '@/lib/googleCalendar'
import type { Locale } from '@/lib/i18n'

import styles from './Agenda.module.css'

interface AgendaProps {
  heading?: string
  linkLabel?: string
  events: EventSummary[]
  agendaHref?: string
  locale?: Locale
}

// Versión compacta para la home: lo que queda de la semana natural (hasta el
// domingo, hora de Madrid), con un máximo de 5 filas. Si no queda nada, la
// sección entera desaparece.
export function Agenda({ heading, linkLabel, events, agendaHref = '/agenda/#agenda', locale = 'es' }: AgendaProps) {
  const items = events.filter((e) => e.title).slice(0, 5)
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      <div className={styles.head}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {linkLabel && <ButtonLink href={agendaHref}>{linkLabel}</ButtonLink>}
      </div>
      <ul className={styles.list} data-reveal-stagger>
        {items.map((event, i) => (
          <li key={i} className={styles.row}>
            {event.dateTime && (
              <span className={styles.date}>
                {formatEventWeekdayShort(event.dateTime, locale)} {formatEventDay(event.dateTime)}{' '}
                {formatEventMonthShort(event.dateTime, locale)} · {formatEventTime(event.dateTime)}
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
