import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { formatEventTime, formatEventWeekdayLong, formatEventWeekdayShort } from '@/lib/formatDate'
import type { EventSummary } from '@/lib/googleCalendar'

import styles from './Agenda.module.css'

interface AgendaProps {
  heading?: string
  linkLabel?: string
  featured: EventSummary | null
  upcoming: EventSummary[]
  locale?: 'es' | 'en'
  ferrolAgendaHref?: string
}

export function Agenda({
  heading,
  linkLabel,
  featured,
  upcoming,
  locale = 'es',
  ferrolAgendaHref = '/agenda/#agenda',
}: AgendaProps) {
  if (!featured && upcoming.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {featured && (
        <div>
          {heading && <h2 className={styles.heading}>{heading}</h2>}
          <h3 className={styles.featuredTitle}>{featured.title}</h3>
          {featured.dateTime && (
            <p className={styles.meta}>
              {formatEventWeekdayLong(featured.dateTime, locale)} · {formatEventTime(featured.dateTime)}
              {featured.location ? ` · ${featured.location.toUpperCase()}` : ''}
            </p>
          )}
          {featured.description && <p className={styles.description}>{featured.description}</p>}
        </div>
      )}

      <div>
        <ul className={styles.list}>
          {upcoming.map((event, i) => (
            <li key={i} className={styles.row}>
              <span className={styles.name}>{event.title}</span>
              {event.dateTime && (
                <span className={styles.date}>
                  {formatEventWeekdayShort(event.dateTime, locale)} · {formatEventTime(event.dateTime)}
                </span>
              )}
            </li>
          ))}
        </ul>
        {linkLabel && (
          <ButtonLink href={ferrolAgendaHref} className={styles.link}>
            {linkLabel}
          </ButtonLink>
        )}
      </div>
    </Container>
  )
}
