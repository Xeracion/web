import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { PageFerrolData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  data: PageFerrolData
  siteSettings: SiteSettings | null
}

export function ClosingCta({ data, siteSettings }: ClosingCtaProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const instagram = siteSettings?.socialLinks?.find((link) => link.platform === 'instagram')

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      {whatsappHref && (
        <ButtonPrimary accent href={whatsappHref}>
          Hablar por WhatsApp
        </ButtonPrimary>
      )}
      {instagram?.url && <ButtonSecondary href={instagram.url}>Instagram</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
