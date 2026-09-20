import type { Metadata } from 'next'
import { Suspense } from 'react'

import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { getExperienciasDestacadas, getHomePageData, getSiteSettings } from '@/sanity/lib/queries'

import { Agenda } from './_sections/Agenda'
import { ClosingCta } from './_sections/ClosingCta'
import { Hero } from './_sections/Hero'
import { InstitutionalStrip } from './_sections/InstitutionalStrip'
import { Logos } from './_sections/Logos'
import { Testimonials } from './_sections/Testimonials'

export async function generateMetadata(): Promise<Metadata> {
  const { home } = await getHomePageData()
  return buildPageMetadata({ description: home?.intro })
}

export default async function HomePage() {
  const [{ home, testimonialLarge, testimonialMedium }, siteSettings, experiencias] = await Promise.all([
    getHomePageData(),
    getSiteSettings(),
    getExperienciasDestacadas(),
  ])

  if (!home) return null

  const [featuredEvent = null, ...upcomingEvents] = await getGoogleCalendarEvents(
    siteSettings?.googleCalendarId,
    { maxResults: 4 },
  )

  return (
    <>
      <Hero data={home} />
      <Suspense fallback={null}>
        <ExperienciasCatalog items={experiencias} intro={home.catalogIntro} />
      </Suspense>
      <Agenda
        eyebrow={home.agendaEyebrow}
        linkLabel={home.agendaLinkLabel}
        featured={featuredEvent}
        upcoming={upcomingEvents}
      />
      <Testimonials eyebrow={home.testimonialsEyebrow} large={testimonialLarge} small={testimonialMedium} />
      <InstitutionalStrip text={home.institutionalText} href={home.institutionalLinkHref} />
      <Logos items={home.institutionalLogos} />
      <ClosingCta home={home} siteSettings={siteSettings} />
    </>
  )
}
