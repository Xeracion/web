import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { SiteSettings } from '@/content/siteSettings'

interface ClosingCtaData {
  closingHeading?: string
  closingText?: string | string[]
  closingCtaPrimaryHref?: string
}

interface ClosingCtaProps {
  data: ClosingCtaData
  siteSettings: SiteSettings
}

export function ClosingCta({ data, siteSettings }: ClosingCtaProps) {
  const emailHref = siteSettings?.email ? `mailto:${siteSettings.email}` : undefined

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      <ButtonPrimary accent href={data.closingCtaPrimaryHref || '#apply'}>
        Start application
      </ButtonPrimary>
      {emailHref && <ButtonSecondary href={emailHref}>Ask a question</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
