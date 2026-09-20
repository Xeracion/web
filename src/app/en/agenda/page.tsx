import type { Metadata } from 'next'

import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { ferrolFaqsEn, fixedProgramsEn, pageFerrolEnContent } from '@/content/agenda'
import { siteSettings } from '@/content/siteSettings'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'

import { AgendaTimeline } from '../../agenda/_sections/AgendaTimeline'
import { ClosingCta } from '../../agenda/_sections/ClosingCta'
import { FixedPrograms } from '../../agenda/_sections/FixedPrograms'
import { Hero } from '../../agenda/_sections/Hero'
import { HowToArrive } from '../../agenda/_sections/HowToArrive'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Schedule', description: pageFerrolEnContent.heroText, locale: 'en_US' })
}

export default async function EnFerrolPage() {
  const start = new Date()
  const end = new Date(start.getTime() + 14 * 24 * 60 * 60 * 1000)
  const upcomingEvents = await getGoogleCalendarEvents(siteSettings.googleCalendarId, {
    timeMin: start,
    timeMax: end,
    maxResults: 20,
  })

  return (
    <>
      <Hero data={pageFerrolEnContent} />
      <FixedPrograms intro={pageFerrolEnContent.fixedProgramsIntro} items={fixedProgramsEn} />
      <AgendaTimeline intro={pageFerrolEnContent.agendaIntro} events={upcomingEvents} locale="en" />
      <HowToArrive data={pageFerrolEnContent} siteSettings={siteSettings} locale="en" />
      <FaqAccordionSection intro={pageFerrolEnContent.faqIntro} items={ferrolFaqsEn} />
      <ClosingCta data={pageFerrolEnContent} siteSettings={siteSettings} locale="en" />
    </>
  )
}
