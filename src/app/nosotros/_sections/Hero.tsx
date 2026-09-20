import Image from 'next/image'

import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Prose } from '@/components/Prose'
import type { StatItem } from '@/content/types'

import styles from './Hero.module.css'

function splitHeading(heading: string, accent?: string) {
  if (!accent || !heading.includes(accent)) return [{ text: heading, accent: false }]
  const [before, after] = heading.split(accent)
  return [
    { text: before, accent: false },
    { text: accent, accent: true },
    { text: after, accent: false },
  ]
}

interface HeroData {
  heroEyebrow?: string
  heroHeading: string
  heroHeadingAccent?: string
  heroText?: string | string[]
  heroStats?: StatItem[]
  heroBackgroundImage?: string
}

export function Hero({ data }: { data: HeroData }) {
  const heading = data.heroHeading ?? ''
  const parts = splitHeading(heading, data.heroHeadingAccent)

  return (
    <section className={styles.hero}>
      {data.heroBackgroundImage && (
        <>
          <Image
            src={data.heroBackgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.backgroundImage}
          />
          <div className={styles.overlay} aria-hidden="true" />
        </>
      )}
      <Container className={styles.content}>
        {data.heroEyebrow && (
          <Eyebrow className={styles.eyebrow}>{data.heroEyebrow}</Eyebrow>
        )}
        <h1 className={styles.heading}>
          {parts.map((part, i) =>
            part.accent ? (
              <span key={i} className={styles.accent}>
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            ),
          )}
        </h1>
        <Prose value={data.heroText} className={styles.text} />
        {data.heroStats && data.heroStats.length > 0 && (
          <div className={styles.stats}>
            {data.heroStats.map((stat, i) => (
              <div key={i} className={styles.stat}>
                <AnimatedNumber value={stat.value ?? ''} className={styles.statValue} />
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
