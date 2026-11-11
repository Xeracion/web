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
  locale?: 'es' | 'gl'
}

const COPY = {
  es: { primary: 'Quiero ver experiencias', primaryHref: '/experiencias/', whatsapp: 'Escríbenos →' },
  gl: { primary: 'Quero ver experiencias', primaryHref: '/gl/experiencias/', whatsapp: 'Escríbenos →' },
}

export function ClosingCta({ data, siteSettings, locale = 'es' }: ClosingCtaProps) {
  const copy = COPY[locale]
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      <ButtonPrimary href={data.closingCtaPrimaryHref || copy.primaryHref}>{copy.primary}</ButtonPrimary>
      {whatsappHref && <ButtonSecondary href={whatsappHref}>{copy.whatsapp}</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
