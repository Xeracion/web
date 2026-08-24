import { stegaClean } from '@sanity/client/stega'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { PageFerrolData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  data: PageFerrolData
  siteSettings: SiteSettings | null
  locale?: 'es' | 'en'
}

const WHATSAPP_LABEL = { es: 'Hablar por WhatsApp', en: 'Chat on WhatsApp' }

export function ClosingCta({ data, siteSettings, locale = 'es' }: ClosingCtaProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const instagram = siteSettings?.socialLinks?.find((link) => stegaClean(link.platform) === 'instagram')

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
