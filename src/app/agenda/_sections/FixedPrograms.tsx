import Link from 'next/link'

import { Container } from '@/components/Container'
import type { FixedProgram, SectionIntro } from '@/content/types'

import styles from './FixedPrograms.module.css'

interface FixedProgramsProps {
  intro?: SectionIntro
  items: FixedProgram[]
  /** Texto del enlace de las tarjetas que tienen página propia. */
  moreLabel?: string
}

export function FixedPrograms({ intro, items, moreLabel = 'Quiero saber más' }: FixedProgramsProps) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid} data-reveal-stagger>
        {items.map((item) => (
          <div key={item.name} className={styles.card}>
            <h3 className={styles.name}>{item.name}</h3>
            {item.schedule && <p className={styles.schedule}>{item.schedule}</p>}
            {item.description && <p className={styles.text}>{item.description}</p>}
            {item.href && (
              <Link href={item.href} className={styles.more}>
                {moreLabel} <span className="xr-arrow" aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
