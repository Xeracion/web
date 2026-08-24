import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { ProcessStepData, SectionIntroData } from '@/sanity/lib/queries'

import styles from './HowToApply.module.css'

interface HowToApplyProps {
  id?: string
  intro?: SectionIntroData
  steps: ProcessStepData[]
}

export function HowToApply({ id, intro, steps }: HowToApplyProps) {
  if (steps.length === 0) return null

  return (
    <Container as="section" id={id} className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div key={i}>
            <p className={styles.number}>{String(i + 1).padStart(2, '0')}</p>
            <h4 className={styles.title}>{step.title}</h4>
            {step.description && <p className={styles.text}>{step.description}</p>}
          </div>
        ))}
      </div>
    </Container>
  )
}
