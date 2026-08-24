import type { Metadata } from 'next'

import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { getHomeEnPageData, getSiteSettings } from '@/sanity/lib/queries'

import { Agenda } from '../(main)/_sections/Agenda'
import { ClosingCta } from '../(main)/_sections/ClosingCta'
import { Hero } from '../(main)/_sections/Hero'
import { RouteCards } from '../(main)/_sections/RouteCards'
import type { RouteCardEntry } from '../(main)/_sections/RouteCards'
import { Stats } from '../(main)/_sections/Stats'
import { Testimonials } from '../(main)/_sections/Testimonials'

export async function generateMetadata(): Promise<Metadata> {
  const { home } = await getHomeEnPageData()
  return buildPageMetadata({ description: home?.intro, locale: 'en_US' })
}

export default async function EnHomePage() {
  const [{ home, testimonialLarge, testimonialMedium }, siteSettings] = await Promise.all([
    getHomeEnPageData(),
    getSiteSettings(),
  ])

  if (!home) return null

  const [featuredEvent = null, ...upcomingEvents] = await getGoogleCalendarEvents(
    siteSettings?.googleCalendarId,
    { maxResults: 4 },
  )

  const routeCardItems: RouteCardEntry[] = [
    { key: 'ferrol', routeClass: 'route-ferrol', href: '/en/ferrol/', photoVariant: 'ferrol', card: home.routeCardFerrol },
    { key: 'volunteering', routeClass: 'route-en', href: '/volunteering/', photoVariant: 'en', card: home.routeCardVolunteering },
    { key: 'about', href: '/about/', photoVariant: 'neutral', card: home.routeCardAbout },
  ]

  return (
    <>
      <Hero data={home} />
      <RouteCards items={routeCardItems} />
      <Stats data={home} />
      <Testimonials eyebrow={home.testimonialsEyebrow} large={testimonialLarge} small={testimonialMedium} />
      <Agenda
        eyebrow={home.agendaEyebrow}
        linkLabel={home.agendaLinkLabel}
        featured={featuredEvent}
        upcoming={upcomingEvents}
        locale="en"
        ferrolAgendaHref="/en/ferrol/#agenda"
      />
      <ClosingCta home={home} siteSettings={siteSettings} locale="en" />
    </>
  )
}
