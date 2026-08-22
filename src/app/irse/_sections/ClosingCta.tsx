import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { PageIrseData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  data: PageIrseData
  siteSettings: SiteSettings | null
}

export function ClosingCta({ data, siteSettings }: ClosingCtaProps) {
  const emailHref = siteSettings?.email ? `mailto:${siteSettings.email}` : undefined

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      <ButtonPrimary accent href="#formulario">
        Apúntame
      </ButtonPrimary>
      {emailHref && <ButtonSecondary href={emailHref}>Preguntas antes</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
