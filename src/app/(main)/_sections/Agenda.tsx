import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { formatEventTime, formatEventWeekdayLong, formatEventWeekdayShort } from '@/lib/formatDate'
import type { EventSummary } from '@/sanity/lib/queries'

import styles from './Agenda.module.css'

interface AgendaProps {
  eyebrow?: string
  linkLabel?: string
  featured: EventSummary | null
  upcoming: EventSummary[]
}

export function Agenda({ eyebrow, linkLabel, featured, upcoming }: AgendaProps) {
  if (!featured && upcoming.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {featured && (
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h3 className={styles.featuredTitle}>{featured.title}</h3>
          {featured.dateTime && (
            <p className={styles.meta}>
              {formatEventWeekdayLong(featured.dateTime)} · {formatEventTime(featured.dateTime)}
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
                  {formatEventWeekdayShort(event.dateTime)} · {formatEventTime(event.dateTime)}
                </span>
              )}
            </li>
          ))}
        </ul>
        {linkLabel && (
          <ButtonLink href="/ferrol/#agenda" className={styles.link}>
            {linkLabel}
          </ButtonLink>
        )}
      </div>
    </Container>
  )
}
