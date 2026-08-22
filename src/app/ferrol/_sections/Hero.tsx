import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { HeroSplit } from '@/components/HeroSplit'
import type { PageFerrolData } from '@/sanity/lib/queries'

import styles from './Hero.module.css'

export function Hero({ data }: { data: PageFerrolData }) {
  return (
    <HeroSplit
      eyebrow={data.heroEyebrow}
      eyebrowAccent
      heading={data.heroHeading}
      text={data.heroText}
      image={data.heroImage}
      imageLabel={data.heroImageCaption ?? ''}
      imageVariant="ferrol"
      below={
        (data.heroCtaPrimaryLabel || data.heroCtaSecondaryLabel) && (
          <div className={styles.buttons}>
            {data.heroCtaPrimaryLabel && (
              <ButtonPrimary accent href="#agenda">
                {data.heroCtaPrimaryLabel}
              </ButtonPrimary>
            )}
            {data.heroCtaSecondaryLabel && (
              <ButtonSecondary href="#visitanos">{data.heroCtaSecondaryLabel}</ButtonSecondary>
            )}
          </div>
        )
      }
    />
  )
}
