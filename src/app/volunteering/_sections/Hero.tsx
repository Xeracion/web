import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { HeroSplit } from '@/components/HeroSplit'
import type { PageEnData } from '@/sanity/lib/queries'

import styles from './Hero.module.css'

export function Hero({ data }: { data: PageEnData }) {
  return (
    <HeroSplit
      eyebrow={data.heroEyebrow}
      eyebrowAccent
      heading={data.heroHeading}
      text={data.heroText}
      image={data.heroImage}
      imageLabel={data.heroImageCaption ?? ''}
      imageVariant="en"
      below={
        (data.heroCtaPrimaryLabel || data.heroCtaSecondaryLabel) && (
          <div className={styles.buttons}>
            {data.heroCtaPrimaryLabel && (
              <ButtonPrimary accent href={data.heroCtaPrimaryHref || '#apply'}>
                {data.heroCtaPrimaryLabel}
              </ButtonPrimary>
            )}
            {data.heroCtaSecondaryLabel && (
              <ButtonSecondary href={data.heroCtaSecondaryHref || '#stays'}>
                {data.heroCtaSecondaryLabel}
              </ButtonSecondary>
            )}
          </div>
        )
      }
    />
  )
}
