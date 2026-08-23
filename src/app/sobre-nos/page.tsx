import type { Metadata } from 'next'

import { buildPageMetadata } from '@/lib/metadata'
import { getSiteSettings, getSobreNosPageData } from '@/sanity/lib/queries'

import { ClosingCta } from './_sections/ClosingCta'
import { Equipo } from './_sections/Equipo'
import { Hero } from './_sections/Hero'
import { Historia } from './_sections/Historia'
import { Iniciativas } from './_sections/Iniciativas'
import { Partners } from './_sections/Partners'
import { Valores } from './_sections/Valores'
import { VoluntariosHistoricos } from './_sections/VoluntariosHistoricos'

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await getSobreNosPageData()
  return buildPageMetadata({ title: 'Sobre nós', description: page?.heroText })
}

export default async function SobreNosPage() {
  const [{ page, volunteerTestimonials }, siteSettings] = await Promise.all([
    getSobreNosPageData(),
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
      <Iniciativas data={page} />
      <Partners data={page} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
