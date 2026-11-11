import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import type { HomeDoor } from '@/content/types'

import styles from './Doors.module.css'

// Tres puertas para quien no viene como participante: socios europeos (en
// inglés), instituciones y empresas, y grupos que quieren algo a medida.
export function Doors({ heading, items }: { heading?: string; items: HomeDoor[] }) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.grid}>
        {items.map((door) => (
          <Card key={door.href} href={door.href} lang={door.lang} className={styles.card}>
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
