import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import type { PageSobreNosData, SiteSettings } from '@/sanity/lib/queries'

interface ClosingCtaProps {
  data: PageSobreNosData
  siteSettings: SiteSettings | null
}

export function ClosingCta({ data, siteSettings }: ClosingCtaProps) {
  const whatsappHref = siteSettings?.whatsapp ? `https://wa.me/${siteSettings.whatsapp}` : undefined

  return (
    <ClosingCtaSection heading={data.closingHeading} text={data.closingText}>
      <ButtonPrimary href="/irse/">Ver oportunidades</ButtonPrimary>
      {whatsappHref && <ButtonSecondary href={whatsappHref}>Escríbenos →</ButtonSecondary>}
    </ClosingCtaSection>
  )
}
