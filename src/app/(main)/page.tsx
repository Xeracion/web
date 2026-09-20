import type { Metadata } from 'next'
import { Suspense } from 'react'

import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { homeEs, homeEsTestimonialLarge, homeEsTestimonialMedium } from '@/content/home'
import { siteSettings } from '@/content/siteSettings'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { getExperienciasDestacadas } from '@/sanity/lib/queries'

import { Agenda } from './_sections/Agenda'
import { ClosingCta } from './_sections/ClosingCta'
import { Hero } from './_sections/Hero'
import { InstitutionalStrip } from './_sections/InstitutionalStrip'
import { Logos } from './_sections/Logos'
import { Testimonials } from './_sections/Testimonials'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ description: homeEs.intro })
}

export default async function HomePage() {
  const [experiencias, [featuredEvent = null, ...upcomingEvents]] = await Promise.all([
    getExperienciasDestacadas(),
    getGoogleCalendarEvents(siteSettings.googleCalendarId, { maxResults: 4 }),
  ])

  return (
    <>
      <Hero data={homeEs} />
      <Suspense fallback={null}>
        <ExperienciasCatalog items={experiencias} intro={homeEs.catalogIntro} forceGrouped />
      </Suspense>
      <Agenda
        eyebrow={homeEs.agendaEyebrow}
        linkLabel={homeEs.agendaLinkLabel}
        featured={featuredEvent}
        upcoming={upcomingEvents}
      />
      <Testimonials
        eyebrow={homeEs.testimonialsEyebrow}
        large={homeEsTestimonialLarge}
        small={homeEsTestimonialMedium}
      />
      <InstitutionalStrip text={homeEs.institutionalText} href={homeEs.institutionalLinkHref} />
      <Logos items={homeEs.institutionalLogos} />
      <ClosingCta home={homeEs} siteSettings={siteSettings} />
    </>
  )
}
