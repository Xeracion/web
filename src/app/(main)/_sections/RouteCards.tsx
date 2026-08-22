import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { EyebrowPill } from '@/components/EyebrowPill'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import type { PhotoPlaceholderVariant } from '@/components/PhotoPlaceholder'
import type { HomeData, RouteCardData } from '@/sanity/lib/queries'

import styles from './RouteCards.module.css'

const ROUTES: Array<{
  key: Extract<PhotoPlaceholderVariant, 'ferrol' | 'irse' | 'en'>
  routeClass: string
  href: string
  field: keyof Pick<HomeData, 'routeCardFerrol' | 'routeCardIrse' | 'routeCardEn'>
}> = [
  { key: 'ferrol', routeClass: 'route-ferrol', href: '/ferrol/', field: 'routeCardFerrol' },
  { key: 'irse', routeClass: 'route-irse', href: '/irse/', field: 'routeCardIrse' },
  { key: 'en', routeClass: 'route-en', href: '/en/', field: 'routeCardEn' },
]

export function RouteCards({ data }: { data: HomeData }) {
  return (
    <Container as="section" className={styles.section}>
      {ROUTES.map((route) => {
        const card: RouteCardData | undefined = data[route.field]
        if (!card) return null

        return (
          <div key={route.key} className={route.routeClass}>
            <Card href={route.href}>
              <div className={styles.photoWrap}>
                <PhotoPlaceholder
                  variant={route.key}
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
