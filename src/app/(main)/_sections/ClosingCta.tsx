import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { HomeData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  home: HomeData
  siteSettings: SiteSettings | null
}

export function ClosingCta({ home, siteSettings }: ClosingCtaProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const emailHref = siteSettings?.email ? `mailto:${siteSettings.email}` : undefined

  return (
    <ClosingCtaSection heading={home.closingHeading} text={home.closingText}>
      {whatsappHref && <ButtonPrimary href={whatsappHref}>Hablar por WhatsApp</ButtonPrimary>}
      {emailHref && <ButtonSecondary href={emailHref}>{siteSettings?.email}</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
