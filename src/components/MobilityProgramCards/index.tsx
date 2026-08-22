import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { MobilityProgramData, SectionIntroData } from '@/sanity/lib/queries'

import styles from './MobilityProgramCards.module.css'

const LABELS = {
  es: { duration: 'Duración', idealFor: 'Ideal si', covers: 'Cubre' },
  en: { duration: 'Duration', idealFor: 'Ideal for', covers: 'Covers' },
}

interface MobilityProgramCardsProps {
  id?: string
  intro?: SectionIntroData
  items: MobilityProgramData[]
  locale?: 'es' | 'en'
}

export function MobilityProgramCards({ id, intro, items, locale = 'es' }: MobilityProgramCardsProps) {
  if (items.length === 0) return null

  const labels = LABELS[locale]

  return (
    <Container as="section" id={id} className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      {intro?.heading && <h2>{intro.heading}</h2>}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3>{item.name}</h3>
            {item.duration && (
              <p className={styles.duration}>
                {labels.duration}: {item.duration}
              </p>
            )}
            {item.idealFor && (
              <p className={styles.text}>
                <strong>{labels.idealFor}:</strong> {item.idealFor}
              </p>
            )}
            {item.covers && (
              <p className={styles.text}>
                <strong>{labels.covers}:</strong> {item.covers}
              </p>
            )}
            {item.ctaLabel && item.ctaUrl && (
              <div className={styles.cta}>
                <ButtonLink accent href={item.ctaUrl}>
                  {item.ctaLabel}
                </ButtonLink>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
