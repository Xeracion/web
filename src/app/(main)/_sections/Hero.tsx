import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { HeroSplit } from '@/components/HeroSplit'

import styles from './Hero.module.css'

interface HeroAction {
  label: string
  href: string
}

interface HeroData {
  heading?: string
  intro?: string
  heroImage?: string
  heroImageAlt?: string
  heroImageCaption?: string
  heroIndicator?: string
  heroActions?: HeroAction[]
}

export function Hero({ data }: { data: HeroData }) {
  const [primary, ...secondary] = data.heroActions ?? []
  const hasBelow = Boolean(primary || data.heroIndicator)

  return (
    <HeroSplit
      heading={data.heading}
      text={data.intro}
      image={data.heroImage}
      imageAlt={data.heroImageAlt}
      imageLabel={data.heroImageCaption ?? ''}
      imageVariant="hero"
      inlineText
      below={
        hasBelow ? (
          <>
            {primary && (
              <div className={styles.actions}>
                <ButtonPrimary href={primary.href}>{primary.label}</ButtonPrimary>
                {secondary.map((action) => (
                  <ButtonSecondary key={action.href} href={action.href}>
                    {action.label}
                  </ButtonSecondary>
                ))}
              </div>
            )}
            {data.heroIndicator && (
              <p className={styles.indicator}>
                <span aria-hidden="true">↓</span> {data.heroIndicator}
              </p>
            )}
          </>
        ) : undefined
      }
    />
  )
}
