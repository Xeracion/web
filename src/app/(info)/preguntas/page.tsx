import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { PageHeader } from '@/components/PageHeader'
import { pagePreguntasEs, preguntasGroupsEs } from '@/content/preguntas'
import { siteSettings } from '@/content/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Preguntas frecuentes', description: pagePreguntasEs.intro })
}

export default function PreguntasPage() {
  const page = pagePreguntasEs

  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />
      {preguntasGroupsEs.map((group) => (
        <FaqAccordionSection key={group.intro.heading} intro={group.intro} items={group.items} />
      ))}
      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href="/experiencias/">{page.closingCtaLabel}</ButtonPrimary>
        <ButtonSecondary href={`https://wa.me/${siteSettings.whatsapp}`}>{page.closingWhatsappLabel}</ButtonSecondary>
      </ClosingCtaSection>
    </>
  )
}
