import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Prose } from '@/components/Prose'
import type { SectionIntro } from '@/content/types'

import styles from './Why.module.css'

interface WhyData {
  whyIntro?: SectionIntro
  whyText?: string | string[]
}

export function Why({ data }: { data: WhyData }) {
  const hasText = (data.whyText?.length ?? 0) > 0
  if (!data.whyIntro?.heading && !hasText) return null

  return (
    <Container as="section" className={styles.section}>
      {data.whyIntro?.eyebrow && <Eyebrow accent>{data.whyIntro.eyebrow}</Eyebrow>}
      {data.whyIntro?.heading && <h2>{data.whyIntro.heading}</h2>}
      <Prose value={data.whyText} className={styles.text} />
    </Container>
  )
}
