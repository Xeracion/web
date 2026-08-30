import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { RichText } from '@/components/RichText'
import type { FaqData, SectionIntroData } from '@/sanity/lib/queries'

import styles from './FaqAccordionSection.module.css'

interface FaqAccordionSectionProps {
  intro?: SectionIntroData
  items: FaqData[]
}

export function FaqAccordionSection({ intro, items }: FaqAccordionSectionProps) {
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.list}>
        {items.map((item, i) => (
          <details key={i} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <RichText value={item.answer} className={styles.answer} />
          </details>
        ))}
      </div>
    </Container>
  )
}
