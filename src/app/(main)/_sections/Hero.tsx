import { HeroSplit } from '@/components/HeroSplit'
import type { HomeBaseData } from '@/sanity/lib/queries'

import styles from './Hero.module.css'

export function Hero({ data }: { data: HomeBaseData }) {
  return (
    <HeroSplit
      eyebrow={data.eyebrow}
      heading={data.heading}
      text={data.intro}
      image={data.heroImage}
      imageLabel={data.heroImageCaption ?? ''}
      imageVariant="hero"
      below={
        data.heroIndicator ? (
          <p className={styles.indicator}>
            <span aria-hidden="true">↓</span> {data.heroIndicator}
          </p>
        ) : undefined
      }
    />
  )
}
