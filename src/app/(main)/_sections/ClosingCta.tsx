import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { SiteSettings } from '@/content/siteSettings'

interface ClosingCtaHomeData {
  closingHeading?: string
  closingText?: string | string[]
  /** Botón de WhatsApp (sobre todo para gente joven). */
  closingWhatsappLabel?: string
  /** Botón de correo para entidades; sin él se enseña la dirección. */
  closingEmailLabel?: string
  closingEmailSubject?: string
}

interface ClosingCtaProps {
  home: ClosingCtaHomeData
  siteSettings: SiteSettings
  locale?: 'es' | 'gl'
}

const WHATSAPP_LABEL = { es: 'Hablar por WhatsApp', gl: 'Falar por WhatsApp' }

export function ClosingCta({ home, siteSettings, locale = 'es' }: ClosingCtaProps) {
  const whatsappHref = siteSettings.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const emailSubject = home.closingEmailSubject ? `?subject=${encodeURIComponent(home.closingEmailSubject)}` : ''
  const emailHref = siteSettings.email ? `mailto:${siteSettings.email}${emailSubject}` : undefined

  return (
    <ClosingCtaSection heading={home.closingHeading} text={home.closingText}>
      {whatsappHref && <ButtonPrimary href={whatsappHref}>{home.closingWhatsappLabel ?? WHATSAPP_LABEL[locale]}</ButtonPrimary>}
      {emailHref && <ButtonSecondary href={emailHref}>{home.closingEmailLabel ?? siteSettings.email}</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
