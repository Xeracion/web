import type { CSSProperties } from 'react'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import type { Feature, SectionIntro } from '@/content/types'

import styles from './FeatureGrid.module.css'

interface FeatureGridProps {
  intro?: SectionIntro
  items: Feature[]
}

export function FeatureGrid({ intro, items }: FeatureGridProps) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div
            key={item.title}
            className={styles.card}
            data-reveal-child
            style={{ '--reveal-i': i } as CSSProperties}
          >
            <span className={styles.number} aria-hidden="true">
              {i + 1}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <Prose value={item.text} className={styles.text} />
          </div>
        ))}
      </div>
    </Container>
  )
}
