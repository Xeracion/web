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
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      <ButtonPrimary href={data.closingCtaPrimaryHref || '/experiencias/'}>Ver experiencias</ButtonPrimary>
      {whatsappHref && <ButtonSecondary href={whatsappHref}>Escríbenos →</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
