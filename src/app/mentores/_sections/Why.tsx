import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { RichText } from '@/components/RichText'
import type { PageMentoresData } from '@/sanity/lib/queries'

import styles from './Why.module.css'

export function Why({ data }: { data: PageMentoresData }) {
  const hasText = (data.whyText?.length ?? 0) > 0
  if (!data.whyIntro?.heading && !hasText) return null

  return (
    <Container as="section" className={styles.section}>
      {data.whyIntro?.eyebrow && <Eyebrow accent>{data.whyIntro.eyebrow}</Eyebrow>}
      {data.whyIntro?.heading && <h2>{data.whyIntro.heading}</h2>}
      <RichText value={data.whyText} className={styles.text} />
    </Container>
  )
}
