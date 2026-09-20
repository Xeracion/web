import type { Metadata } from 'next'

import { homeEn, homeEnTestimonialLarge, homeEnTestimonialMedium } from '@/content/home'
import { siteSettings } from '@/content/siteSettings'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'

import { Agenda } from '../(main)/_sections/Agenda'
import { ClosingCta } from '../(main)/_sections/ClosingCta'
import { Hero } from '../(main)/_sections/Hero'
import { RouteCards } from '../(main)/_sections/RouteCards'
import type { RouteCardEntry } from '../(main)/_sections/RouteCards'
import { Stats } from '../(main)/_sections/Stats'
import { Testimonials } from '../(main)/_sections/Testimonials'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ description: homeEn.intro, locale: 'en_US' })
}

export default async function EnHomePage() {
  const [featuredEvent = null, ...upcomingEvents] = await getGoogleCalendarEvents(
    siteSettings.googleCalendarId,
    { maxResults: 4 },
  )

  const routeCardItems: RouteCardEntry[] = [
    { key: 'ferrol', routeClass: 'route-ferrol', href: '/en/agenda/', photoVariant: 'ferrol', card: homeEn.routeCardFerrol },
    { key: 'volunteering', routeClass: 'route-en', href: '/volunteering/', photoVariant: 'en', card: homeEn.routeCardVolunteering },
    { key: 'about', href: '/about/', photoVariant: 'neutral', card: homeEn.routeCardAbout },
  ]

  return (
    <>
      <Hero data={homeEn} />
      <RouteCards items={routeCardItems} />
      <Stats data={homeEn} />
      <Testimonials
        eyebrow={homeEn.testimonialsEyebrow}
        large={homeEnTestimonialLarge}
        small={homeEnTestimonialMedium}
      />
      <Agenda
        eyebrow={homeEn.agendaEyebrow}
        linkLabel={homeEn.agendaLinkLabel}
        featured={featuredEvent}
        upcoming={upcomingEvents}
        locale="en"
        ferrolAgendaHref="/en/agenda/#agenda"
      />
      <ClosingCta home={homeEn} siteSettings={siteSettings} locale="en" />
    </>
  )
}
