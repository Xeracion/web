import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { HomeBaseData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  home: HomeBaseData
  siteSettings: SiteSettings | null
  locale?: 'es' | 'en'
}

const WHATSAPP_LABEL = { es: 'Hablar por WhatsApp', en: 'Chat on WhatsApp' }

export function ClosingCta({ home, siteSettings, locale = 'es' }: ClosingCtaProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const emailHref = siteSettings?.email ? `mailto:${siteSettings.email}` : undefined

  return (
    <ClosingCtaSection heading={home.closingHeading} text={home.closingText}>
      {whatsappHref && <ButtonPrimary href={whatsappHref}>{WHATSAPP_LABEL[locale]}</ButtonPrimary>}
      {emailHref && <ButtonSecondary href={emailHref}>{siteSettings?.email}</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
