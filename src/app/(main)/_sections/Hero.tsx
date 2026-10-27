import { HeroSplit } from '@/components/HeroSplit'

import styles from './Hero.module.css'

interface HeroData {
  heading?: string
  intro?: string
  heroImage?: string
  heroImageAlt?: string
  heroImageCaption?: string
  heroIndicator?: string
}

export function Hero({ data }: { data: HeroData }) {
  return (
    <HeroSplit
      heading={data.heading}
      text={data.intro}
      image={data.heroImage}
      imageAlt={data.heroImageAlt}
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
