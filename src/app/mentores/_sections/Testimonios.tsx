import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { SectionIntroData, TestimonialData } from '@/sanity/lib/queries'

import styles from './Testimonios.module.css'

interface TestimoniosProps {
  intro?: SectionIntroData
  items: TestimonialData[]
}

export function Testimonios({ intro, items }: TestimoniosProps) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
            <p className={styles.attribution}>
              {[item.name, item.originCity].filter(Boolean).join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}
