import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { PageMentoresData } from '@/sanity/lib/queries'

import styles from './Why.module.css'

export function Why({ data }: { data: PageMentoresData }) {
  if (!data.whyIntro?.heading && !data.whyText) return null

  return (
    <Container as="section" className={styles.section}>
      {data.whyIntro?.eyebrow && <Eyebrow accent>{data.whyIntro.eyebrow}</Eyebrow>}
      {data.whyIntro?.heading && <h2>{data.whyIntro.heading}</h2>}
      {data.whyText && <p className={styles.text}>{data.whyText}</p>}
    </Container>
  )
}
