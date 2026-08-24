import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { getFerrolEnPageData, getSiteSettings } from '@/sanity/lib/queries'

import { AgendaTimeline } from '../../ferrol/_sections/AgendaTimeline'
import { ClosingCta } from '../../ferrol/_sections/ClosingCta'
import { FixedPrograms } from '../../ferrol/_sections/FixedPrograms'
import { Hero } from '../../ferrol/_sections/Hero'
import { HowToArrive } from '../../ferrol/_sections/HowToArrive'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getFerrolEnPageData()
  return buildPageMetadata({ title: 'Ferrol', description: page?.heroText, locale: 'en_US' })
}

export default async function EnFerrolPage() {
  const [{ page, fixedPrograms, faqs }, siteSettings] = await Promise.all([
    getFerrolEnPageData(),
    getSiteSettings(),
  ])

  if (!page) return null

  const start = new Date()
  const end = new Date(start.getTime() + 14 * 24 * 60 * 60 * 1000)
  const upcomingEvents = await getGoogleCalendarEvents(siteSettings?.googleCalendarId, {
    timeMin: start,
    timeMax: end,
    maxResults: 20,
  })

  return (
    <>
      <Hero data={page} />
      <FixedPrograms intro={page.fixedProgramsIntro} items={fixedPrograms} />
      <AgendaTimeline intro={page.agendaIntro} events={upcomingEvents} locale="en" />
      <HowToArrive data={page} siteSettings={siteSettings} locale="en" />
      <FaqAccordionSection intro={page.faqIntro} items={faqs} />
      <ClosingCta data={page} siteSettings={siteSettings} locale="en" />
    </>
  )
}
