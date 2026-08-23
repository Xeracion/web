import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { HeroSplit } from '@/components/HeroSplit'
import type { PageIrseData } from '@/sanity/lib/queries'

import styles from './Hero.module.css'

export function Hero({ data }: { data: PageIrseData }) {
  return (
    <HeroSplit
      eyebrow={data.heroEyebrow}
      eyebrowAccent
      heading={data.heroHeading}
      text={data.heroText}
      image={data.heroImage}
      imageLabel={data.heroImageCaption ?? ''}
      imageVariant="irse"
      below={
        (data.heroCtaPrimaryLabel || data.heroCtaSecondaryLabel) && (
          <div className={styles.buttons}>
            {data.heroCtaPrimaryLabel && (
              <ButtonPrimary accent href={data.heroCtaPrimaryHref || '#formulario'}>
                {data.heroCtaPrimaryLabel}
              </ButtonPrimary>
            )}
            {data.heroCtaSecondaryLabel && (
              <ButtonSecondary href={data.heroCtaSecondaryHref || '#programas'}>
                {data.heroCtaSecondaryLabel}
              </ButtonSecondary>
            )}
          </div>
        )
      }
    />
  )
}
