import type { Metadata } from 'next'

import { AgendaTimeline } from '@/app/agenda/_sections/AgendaTimeline'
import { ClosingCta } from '@/app/agenda/_sections/ClosingCta'
import { FixedPrograms } from '@/app/agenda/_sections/FixedPrograms'
import { Hero } from '@/app/agenda/_sections/Hero'
import { HowToArrive } from '@/app/agenda/_sections/HowToArrive'
import { MentoresCallout } from '@/app/agenda/_sections/MentoresCallout'
import { FaqAccordionSection } from '@/components/FaqAccordionSection'
import { ferrolFaqsGl, fixedProgramsGl, pageFerrolGl } from '@/content/gl/agenda'
import { siteSettingsGl } from '@/content/gl/siteSettings'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'

export const revalidate = 300

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Axenda', description: pageFerrolGl.heroText, locale: 'gl_ES', path: '/gl/axenda/' })
}

export default async function AxendaPage() {
  const start = new Date()
  const end = new Date(start.getTime() + 14 * 24 * 60 * 60 * 1000)
  const upcomingEvents = await getGoogleCalendarEvents(siteSettingsGl.googleCalendarId, {
    timeMin: start,
    timeMax: end,
    maxResults: 20,
  })

  return (
    <>
      <Hero data={pageFerrolGl} />
      <FixedPrograms intro={pageFerrolGl.fixedProgramsIntro} items={fixedProgramsGl} />
      <AgendaTimeline intro={pageFerrolGl.agendaIntro} events={upcomingEvents} locale="gl" />
      <HowToArrive data={pageFerrolGl} siteSettings={siteSettingsGl} locale="gl" />
      <FaqAccordionSection intro={pageFerrolGl.faqIntro} items={ferrolFaqsGl} />
      <MentoresCallout locale="gl" />
      <ClosingCta data={pageFerrolGl} siteSettings={siteSettingsGl} locale="gl" />
    </>
  )
}
