import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { buildPageMetadata } from '@/lib/metadata'
import { getFerrolPageData, getSiteSettings } from '@/sanity/lib/queries'

import { AgendaTimeline } from './_sections/AgendaTimeline'
import { ClosingCta } from './_sections/ClosingCta'
import { FixedPrograms } from './_sections/FixedPrograms'
import { Hero } from './_sections/Hero'
import { HowToArrive } from './_sections/HowToArrive'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getFerrolPageData()
  return buildPageMetadata({ title: 'Ferrol', description: page?.heroText })
}

export default async function FerrolPage() {
  const [{ page, fixedPrograms, upcomingEvents, faqs }, siteSettings] = await Promise.all([
    getFerrolPageData(),
    getSiteSettings(),
  ])

  if (!page) return null

  return (
    <>
      <Hero data={page} />
      <FixedPrograms intro={page.fixedProgramsIntro} items={fixedPrograms} />
      <AgendaTimeline intro={page.agendaIntro} events={upcomingEvents} />
      <HowToArrive data={page} siteSettings={siteSettings} />
      <FaqAccordionSection intro={page.faqIntro} items={faqs} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
