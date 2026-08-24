import type { Metadata } from 'next'

import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { getHomePageData, getSiteSettings } from '@/sanity/lib/queries'

import { Agenda } from './_sections/Agenda'
import { ClosingCta } from './_sections/ClosingCta'
import { Hero } from './_sections/Hero'
import { RouteCards } from './_sections/RouteCards'
import type { RouteCardEntry } from './_sections/RouteCards'
import { Stats } from './_sections/Stats'
import { Testimonials } from './_sections/Testimonials'

export async function generateMetadata(): Promise<Metadata> {
  const { home } = await getHomePageData()
  return buildPageMetadata({ description: home?.intro })
}

export default async function HomePage() {
  const [{ home, testimonialLarge, testimonialMedium }, siteSettings] = await Promise.all([
    getHomePageData(),
    getSiteSettings(),
  ])

  if (!home) return null

  const [featuredEvent = null, ...upcomingEvents] = await getGoogleCalendarEvents(
    siteSettings?.googleCalendarId,
    { maxResults: 4 },
  )

  const routeCardItems: RouteCardEntry[] = [
    { key: 'ferrol', routeClass: 'route-ferrol', href: '/ferrol/', photoVariant: 'ferrol', card: home.routeCardFerrol },
    { key: 'irse', routeClass: 'route-irse', href: '/irse/', photoVariant: 'irse', card: home.routeCardIrse },
    { key: 'en', routeClass: 'route-en', href: '/volunteering/', photoVariant: 'en', card: home.routeCardEn },
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
      />
      <ClosingCta home={home} siteSettings={siteSettings} />
    </>
  )
}
