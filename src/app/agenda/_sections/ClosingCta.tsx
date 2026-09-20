import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { SiteSettings } from '@/content/siteSettings'

interface ClosingCtaData {
  closingHeading?: string
  closingText?: string | string[]
}

interface ClosingCtaProps {
  data: ClosingCtaData
  siteSettings: SiteSettings
  locale?: 'es' | 'en'
}

const WHATSAPP_LABEL = { es: 'Hablar por WhatsApp', en: 'Chat on WhatsApp' }

export function ClosingCta({ data, siteSettings, locale = 'es' }: ClosingCtaProps) {
  const whatsappHref = siteSettings.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const instagram = siteSettings.socialLinks.find((link) => link.platform === 'instagram')

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      {whatsappHref && (
        <ButtonPrimary accent href={whatsappHref}>
          {WHATSAPP_LABEL[locale]}
        </ButtonPrimary>
      )}
      {instagram?.url && <ButtonSecondary href={instagram.url}>Instagram</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
