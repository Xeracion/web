import { AnimatedNumber } from '@/components/AnimatedNumber'
import { HeroSplit } from '@/components/HeroSplit'
import type { StatItem } from '@/content/types'

import styles from './Hero.module.css'

interface HeroData {
  heroHeading: string
  heroText?: string | string[]
  heroStats?: StatItem[]
  heroBackgroundImage?: string
}

export function Hero({ data }: { data: HeroData }) {
  return (
    <HeroSplit
      heading={data.heroHeading}
      text={data.heroText}
      image={data.heroBackgroundImage}
      imageAlt="El equipo de Xeración y el voluntariado europeo en la Casa da Xuventude de Ferrol"
      imageLabel="foto editorial · equipo en la Casa da Xuventude"
      imageVariant="neutral"
      below={
        data.heroStats && data.heroStats.length > 0 ? (
          <dl className={styles.stats}>
            {data.heroStats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <dt className={styles.statValue}>
                  <AnimatedNumber value={stat.value ?? ''} as="span" />
                </dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        ) : undefined
      }
    />
  )
}
