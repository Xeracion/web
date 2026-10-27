import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { FeatureGrid } from '@/components/FeatureGrid'
import { PageHeader } from '@/components/PageHeader'
import { bienvenidoBenefitsEs, pageBienvenidoEs } from '@/content/bienvenido'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return {
    ...buildPageMetadata({ title: 'Bienvenida', description: pageBienvenidoEs.intro }),
    robots: { index: false },
  }
}

export default function BienvenidoPage() {
  const page = pageBienvenidoEs

  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />
      <FeatureGrid intro={page.benefitsIntro} items={bienvenidoBenefitsEs} />
      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary highlight href={page.closingCtaHref}>
          {page.closingCtaLabel}
        </ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
