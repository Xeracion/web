import type { Metadata } from 'next'

import { buildPageMetadata } from '@/lib/metadata'
import { getSiteSettings, getNosotrosPageData } from '@/sanity/lib/queries'

import { ClosingCta } from './_sections/ClosingCta'
import { Equipo } from './_sections/Equipo'
import { HanEstadoConNosotros } from './_sections/HanEstadoConNosotros'
import { Hero } from './_sections/Hero'
import { Historia } from './_sections/Historia'
import { Iniciativas } from './_sections/Iniciativas'
import { Partners } from './_sections/Partners'
import { Valores } from './_sections/Valores'
import { VoluntariosHistoricos } from './_sections/VoluntariosHistoricos'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getNosotrosPageData()
  return buildPageMetadata({ title: 'Sobre nós', description: page?.heroText })
}

export default async function NosotrosPage() {
  const [{ page, volunteerTestimonials }, siteSettings] = await Promise.all([
    getNosotrosPageData(),
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
      <HanEstadoConNosotros intro={page.pastVolunteersIntro} members={page.pastVolunteers ?? []} />
      <Iniciativas data={page} />
      <Partners data={page} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
