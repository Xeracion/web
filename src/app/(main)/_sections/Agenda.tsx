import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { formatEventDay, formatEventMonthShort, formatEventTime, formatEventWeekdayShort } from '@/lib/formatDate'
import type { FichaExperiencia } from '@/content/experiencias'
import type { EventSummary } from '@/lib/googleCalendar'
import type { Locale } from '@/lib/i18n'

import styles from './Agenda.module.css'

interface AgendaProps {
  heading?: string
  linkLabel?: string
  events: EventSummary[]
  agendaHref?: string
  locale?: Locale
  /** Experiencias con ficha: si el nombre del evento contiene su título, el nombre enlaza a ella. */
  fichas?: FichaExperiencia[]
}

// Versión compacta para la home: los eventos de hoy y los cuatro días
// siguientes (la consulta ya viene acotada). Si no hay ninguno, la sección
// entera desaparece.
export function Agenda({
  heading,
  linkLabel,
  events,
  agendaHref = '/agenda/#agenda',
  locale = 'es',
  fichas = [],
}: AgendaProps) {
  const items = events.filter((e) => e.title)
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
            <EventName title={event.title ?? ''} fichas={fichas} />
            {event.location && <span className={styles.place}>{event.location}</span>}
          </li>
        ))}
      </ul>
    </Container>
  )
}

function EventName({ title, fichas }: { title: string; fichas: FichaExperiencia[] }) {
  const lower = title.toLowerCase()
  const ficha = fichas.find((f) => lower.includes(f.titulo.toLowerCase()))
  if (!ficha) return <span className={styles.name}>{title}</span>

  return (
    <a
      href={ficha.href}
      className={styles.nameLink}
      {...(ficha.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {title}
      <span className={styles.arrow} aria-hidden="true">
        {ficha.external ? '↗' : '→'}
      </span>
    </a>
  )
}
