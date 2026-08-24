import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { PageNosotrosData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  data: PageNosotrosData
  siteSettings: SiteSettings | null
  locale?: 'es' | 'en'
}

const COPY = {
  es: { primaryHref: '/irse/', primaryLabel: 'Ver oportunidades', secondaryLabel: 'Escríbenos →' },
  en: { primaryHref: '/volunteering/', primaryLabel: 'See opportunities', secondaryLabel: 'Write to us →' },
}

export function ClosingCta({ data, siteSettings, locale = 'es' }: ClosingCtaProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined
  const copy = COPY[locale]

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      <ButtonPrimary href={data.closingCtaPrimaryHref || copy.primaryHref}>
        {copy.primaryLabel}
      </ButtonPrimary>
      {whatsappHref && <ButtonSecondary href={whatsappHref}>{copy.secondaryLabel}</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
