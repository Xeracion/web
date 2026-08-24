import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { EyebrowPill } from '@/components/EyebrowPill'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PhotoPlaceholderVariant } from '@/components/PhotoPlaceholder'
import type { RouteCardData } from '@/sanity/lib/queries'

import styles from './RouteCards.module.css'

export interface RouteCardEntry {
  key: string
  routeClass?: string
  href: string
  photoVariant: PhotoPlaceholderVariant
  card?: RouteCardData
}

export function RouteCards({ items }: { items: RouteCardEntry[] }) {
  return (
    <Container as="section" className={styles.section}>
      {items.map((route) => {
        const card = route.card
        if (!card) return null

        return (
          <div key={route.key} className={route.routeClass}>
            <Card href={route.href}>
              <div className={styles.photoWrap}>
                <PhotoPlaceholder
                  variant={route.photoVariant}
                  image={card.image}
                  label={card.photoLabel ?? ''}
                  className={styles.photo}
                  style={{ aspectRatio: 'var(--card-aspect)' }}
                />
                {card.badgeLabel && (
                  <div className={styles.badge}>
                    <EyebrowPill accent>{card.badgeLabel}</EyebrowPill>
                  </div>
                )}
              </div>
              <div className={styles.body}>
                <h3>{card.title}</h3>
                <p className={styles.text}>{card.text}</p>
                <span className={styles.cta}>
                  {card.ctaLabel}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Card>
          </div>
        )
      })}
    </Container>
  )
}
