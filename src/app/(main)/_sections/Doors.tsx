import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import styles from './Doors.module.css'

interface Door {
  title: string
  text?: string
  ctaLabel: string
  href: string
}

// Dos puertas discretas para quien no viene como participante: entidades
// europeas que buscan socio y empresas que quieren acoger en prácticas.
export function Doors({ heading, items }: { heading?: string; items: Door[] }) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.grid}>
        {items.map((door) => (
          <Card key={door.href} href={door.href} className={styles.card}>
            <h3 className={styles.title}>{door.title}</h3>
            {door.text && <p className={styles.text}>{door.text}</p>}
            <span className={styles.cta}>
              {door.ctaLabel} <span aria-hidden="true">→</span>
            </span>
          </Card>
        ))}
      </div>
    </Container>
  )
}
