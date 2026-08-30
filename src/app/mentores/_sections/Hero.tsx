import { ButtonPrimary } from '@/components/ButtonPrimary'
import { HeroSplit } from '@/components/HeroSplit'
import type { PageMentoresData } from '@/sanity/lib/queries'

export function Hero({ data }: { data: PageMentoresData }) {
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
