import Image from 'next/image'
import type { CSSProperties } from 'react'

import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { countWords, WordReveal } from '@/components/WordReveal'
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
  heroHeading: string
  heroHeadingAccent?: string
  heroText?: string | string[]
  heroStats?: StatItem[]
  heroBackgroundImage?: string
}

export function Hero({ data }: { data: HeroData }) {
  const heading = data.heroHeading ?? ''
  const parts = splitHeading(heading, data.heroHeadingAccent)
  const offsets = parts.map((_, i) => parts.slice(0, i).reduce((sum, p) => sum + countWords(p.text), 0))
  const afterWords = { '--hero-delay': `${countWords(heading) * 28 + 260}ms` } as CSSProperties

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
            quality={90}
            className={styles.backgroundImage}
          />
          <div className={styles.overlay} aria-hidden="true" />
        </>
      )}
      <Container className={styles.content}>
        <h1 className={styles.heading}>
          {parts.map((part, i) =>
            part.accent ? (
              <span key={i} className={styles.accent}>
                <WordReveal text={part.text} offset={offsets[i]} />
              </span>
            ) : (
              <span key={i}>
                {part.text.startsWith(' ') && ' '}
                <WordReveal text={part.text} offset={offsets[i]} />
                {part.text.endsWith(' ') && ' '}
              </span>
            ),
          )}
        </h1>
        <div className="xr-hero-fade" style={afterWords}>
          <Prose value={data.heroText} className={styles.text} />
        </div>
        {data.heroStats && data.heroStats.length > 0 && (
          <div className={`${styles.stats} xr-hero-fade`} style={afterWords}>
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
