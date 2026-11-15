import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import type { HomeDoor, SectionIntro } from '@/content/types'

import styles from './QueHacemos.module.css'

interface QueHacemosData {
  queHacemosIntro?: SectionIntro
  queHacemos?: HomeDoor[]
}

// Lo que hacemos, en tarjetas que llevan a cada parte de la web.
export function QueHacemos({ data }: { data: QueHacemosData }) {
  const items = data.queHacemos ?? []
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.queHacemosIntro?.heading && <h2>{data.queHacemosIntro.heading}</h2>}
      {data.queHacemosIntro?.text && <p className={styles.lead}>{data.queHacemosIntro.text}</p>}
      <div className={styles.grid} data-reveal-stagger>
        {items.map((item) => (
          <Card key={item.href} href={item.href} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            {item.text && <p className={styles.text}>{item.text}</p>}
            <span className={styles.cta}>
              {item.ctaLabel} <span className="xr-arrow" aria-hidden="true">→</span>
            </span>
          </Card>
        ))}
      </div>
    </Container>
  )
}
