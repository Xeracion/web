import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { HeroSplit } from '@/components/HeroSplit'

import styles from './Hero.module.css'

interface HeroData {
  heroHeading?: string
  heroText?: string | string[]
  heroImage?: string
  heroImageAlt?: string
  heroImageCaption?: string
  heroCtaPrimaryLabel?: string
  heroCtaPrimaryHref?: string
  heroCtaSecondaryLabel?: string
  heroCtaSecondaryHref?: string
}

export function Hero({ data }: { data: HeroData }) {
  return (
    <HeroSplit
      heading={data.heroHeading}
      text={data.heroText}
      image={data.heroImage}
      imageAlt={data.heroImageAlt}
      imageLabel={data.heroImageCaption ?? ''}
      imageVariant="ferrol"
      below={
        (data.heroCtaPrimaryLabel || data.heroCtaSecondaryLabel) && (
          <div className={styles.buttons}>
            {data.heroCtaPrimaryLabel && (
              <ButtonPrimary accent href={data.heroCtaPrimaryHref || '#agenda'}>
                {data.heroCtaPrimaryLabel}
              </ButtonPrimary>
            )}
            {data.heroCtaSecondaryLabel && (
              <ButtonSecondary href={data.heroCtaSecondaryHref || '#visitanos'}>
                {data.heroCtaSecondaryLabel}
              </ButtonSecondary>
            )}
          </div>
        )
      }
    />
  )
}
