import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { getFerrolPageData, getSiteSettings } from '@/sanity/lib/queries'

import { AgendaTimeline } from './_sections/AgendaTimeline'
import { ClosingCta } from './_sections/ClosingCta'
import { FixedPrograms } from './_sections/FixedPrograms'
import { Hero } from './_sections/Hero'
import { HowToArrive } from './_sections/HowToArrive'
import { MentoresCallout } from './_sections/MentoresCallout'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getFerrolPageData()
  return buildPageMetadata({ title: 'Ferrol', description: page?.heroText })
}

export default async function FerrolPage() {
  const [{ page, fixedPrograms, faqs }, siteSettings] = await Promise.all([
    getFerrolPageData(),
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
      <AgendaTimeline intro={page.agendaIntro} events={upcomingEvents} />
      <HowToArrive data={page} siteSettings={siteSettings} />
      <FaqAccordionSection intro={page.faqIntro} items={faqs} />
      <MentoresCallout />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
