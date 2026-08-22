import type { Metadata } from 'next'

import { buildPageMetadata } from '@/lib/metadata'
import { getHomePageData, getSiteSettings } from '@/sanity/lib/queries'

import { Agenda } from './_sections/Agenda'
import { ClosingCta } from './_sections/ClosingCta'
import { Hero } from './_sections/Hero'
import { RouteCards } from './_sections/RouteCards'
import { Stats } from './_sections/Stats'
import { Testimonials } from './_sections/Testimonials'

export async function generateMetadata(): Promise<Metadata> {
  const { home } = await getHomePageData()
  return buildPageMetadata({ description: home?.intro })
}

export default async function HomePage() {
  const [{ home, testimonialLarge, testimonialMedium, featuredEvent, upcomingEvents }, siteSettings] =
    await Promise.all([getHomePageData(), getSiteSettings()])

  if (!home) return null

  return (
    <>
      <Hero data={home} />
      <RouteCards data={home} />
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
