import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { fixedProgramsEs, ferrolFaqsEs, pageFerrolEs } from '@/content/agenda'
import { siteSettings } from '@/content/siteSettings'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'

import { AgendaTimeline } from './_sections/AgendaTimeline'
import { ClosingCta } from './_sections/ClosingCta'
import { FixedPrograms } from './_sections/FixedPrograms'
import { Hero } from './_sections/Hero'
import { HowToArrive } from './_sections/HowToArrive'
import { MentoresCallout } from './_sections/MentoresCallout'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Agenda', description: pageFerrolEs.heroText })
}

export default async function FerrolPage() {
  const start = new Date()
  const end = new Date(start.getTime() + 14 * 24 * 60 * 60 * 1000)
  const upcomingEvents = await getGoogleCalendarEvents(siteSettings.googleCalendarId, {
    timeMin: start,
    timeMax: end,
    maxResults: 20,
  })

  return (
    <>
      <Hero data={pageFerrolEs} />
      <FixedPrograms intro={pageFerrolEs.fixedProgramsIntro} items={fixedProgramsEs} />
      <AgendaTimeline intro={pageFerrolEs.agendaIntro} events={upcomingEvents} />
      <HowToArrive data={pageFerrolEs} siteSettings={siteSettings} />
      <FaqAccordionSection intro={pageFerrolEs.faqIntro} items={ferrolFaqsEs} />
      <MentoresCallout />
      <ClosingCta data={pageFerrolEs} siteSettings={siteSettings} />
    </>
  )
}
