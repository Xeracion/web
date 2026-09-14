import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { FixedProgramData, SectionIntroData } from '@/sanity/lib/queries'

import styles from './FixedPrograms.module.css'

interface FixedProgramsProps {
  intro?: SectionIntroData
  items: FixedProgramData[]
}

export function FixedPrograms({ intro, items }: FixedProgramsProps) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <h4>{item.name}</h4>
            <p className={styles.text}>{[item.schedule, item.description].filter(Boolean).join('. ')}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
