import { ButtonPrimary } from '@/components/ButtonPrimary'
import { HeroSplit } from '@/components/HeroSplit'

interface HeroData {
  heroEyebrow?: string
  heroHeading: string
  heroText?: string | string[]
  heroImage?: string
  heroImageCaption?: string
  heroCtaLabel?: string
  heroCtaHref?: string
}

export function Hero({ data }: { data: HeroData }) {
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
        data.heroCtaLabel && (
          <ButtonPrimary accent href={data.heroCtaHref || 'mailto:info@xeracion.org'}>
            {data.heroCtaLabel}
          </ButtonPrimary>
        )
      }
    />
  )
}
