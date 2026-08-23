import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { PageSobreNosData } from '@/sanity/lib/queries'

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

export function Hero({ data }: { data: PageSobreNosData }) {
  const heading = data.heroHeading ?? ''
  const parts = splitHeading(heading, data.heroHeadingAccent)

  return (
    <Container as="section" className={styles.hero}>
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
      {data.heroText && <p className={styles.text}>{data.heroText}</p>}
      {data.heroStats && data.heroStats.length > 0 && (
        <div className={styles.stats}>
          {data.heroStats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}
