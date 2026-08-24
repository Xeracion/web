import type { Metadata } from 'next'

import { buildPageMetadata } from '@/lib/metadata'
import { getSiteSettings, getNosotrosEnPageData } from '@/sanity/lib/queries'

import { ClosingCta } from '../nosotros/_sections/ClosingCta'
import { Equipo } from '../nosotros/_sections/Equipo'
import { HanEstadoConNosotros } from '../nosotros/_sections/HanEstadoConNosotros'
import { Hero } from '../nosotros/_sections/Hero'
import { Historia } from '../nosotros/_sections/Historia'
import { Iniciativas } from '../nosotros/_sections/Iniciativas'
import { Partners } from '../nosotros/_sections/Partners'
import { Valores } from '../nosotros/_sections/Valores'
import { VoluntariosHistoricos } from '../nosotros/_sections/VoluntariosHistoricos'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getNosotrosEnPageData()
  return buildPageMetadata({ title: 'About us', description: page?.heroText, locale: 'en_US' })
}

export default async function AboutPage() {
  const [{ page, volunteerTestimonials }, siteSettings] = await Promise.all([
    getNosotrosEnPageData(),
    getSiteSettings(),
  ])

  if (!page) return null

  return (
    <>
      <Hero data={page} />
      <Historia data={page} />
      <Valores data={page} />
      <Equipo data={page} />
      <VoluntariosHistoricos data={page} testimonials={volunteerTestimonials} />
      <HanEstadoConNosotros intro={page.pastVolunteersIntro} members={page.pastVolunteers ?? []} locale="en" />
      <Iniciativas data={page} />
      <Partners data={page} />
      <ClosingCta data={page} siteSettings={siteSettings} locale="en" />
    </>
  )
}
