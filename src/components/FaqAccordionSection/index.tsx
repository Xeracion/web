import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Prose } from '@/components/Prose'
import type { Faq, SectionIntro } from '@/content/types'

import styles from './FaqAccordionSection.module.css'

interface FaqAccordionSectionProps {
  intro?: SectionIntro
  items: Faq[]
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
            <Prose value={item.answer} className={styles.answer} />
          </details>
        ))}
      </div>
    </Container>
  )
}
