import { ButtonPrimary } from '@/components/ButtonPrimary'
import { HeroSplit } from '@/components/HeroSplit'

interface HeroData {
  heroHeading: string
  heroText?: string | string[]
  heroImage?: string
  heroImageAlt?: string
  heroImageCaption?: string
  heroCtaLabel?: string
  heroCtaHref?: string
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
        data.heroCtaLabel && (
          <ButtonPrimary accent href={data.heroCtaHref || 'mailto:info@xeracion.org'}>
            {data.heroCtaLabel}
          </ButtonPrimary>
        )
      }
    />
  )
}
