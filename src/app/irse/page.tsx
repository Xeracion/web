import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { MobilityProgramCards } from '@/components/MobilityProgramCards'
import { buildPageMetadata } from '@/lib/metadata'
import { getIrsePageData, getSiteSettings } from '@/sanity/lib/queries'

import { ClosingCta } from './_sections/ClosingCta'
import { Hero } from './_sections/Hero'
import { OpportunitiesFeed } from './_sections/OpportunitiesFeed'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getIrsePageData()
  return buildPageMetadata({ title: 'Irse', description: page?.heroText })
}

export default async function IrsePage() {
  const [{ page, mobilityPrograms, faqs }, siteSettings] = await Promise.all([
    getIrsePageData(),
    getSiteSettings(),
  ])

  if (!page) return null

  return (
    <>
      <Hero data={page} />
      <MobilityProgramCards id="programas" intro={page.programsIntro} items={mobilityPrograms} locale="es" />
      <OpportunitiesFeed intro={page.opportunitiesIntro} feedUrl={page.opportunitiesFeedUrl} />
      <FaqAccordionSection intro={page.faqIntro} items={faqs} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
