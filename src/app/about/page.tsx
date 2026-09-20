import type { Metadata } from 'next'

import { nosotrosTestimonialsEn, pageNosotrosEnContent } from '@/content/nosotros'
import { siteSettings } from '@/content/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import { ClosingCta } from '../nosotros/_sections/ClosingCta'
import { Equipo } from '../nosotros/_sections/Equipo'
import { HanEstadoConNosotros } from '../nosotros/_sections/HanEstadoConNosotros'
import { Hero } from '../nosotros/_sections/Hero'
import { Historia } from '../nosotros/_sections/Historia'
import { Iniciativas } from '../nosotros/_sections/Iniciativas'
import { Legal } from '../nosotros/_sections/Legal'
import { Partners } from '../nosotros/_sections/Partners'
import { Valores } from '../nosotros/_sections/Valores'
import { VoluntariosHistoricos } from '../nosotros/_sections/VoluntariosHistoricos'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ title: 'About us', description: pageNosotrosEnContent.heroText, locale: 'en_US' })
}

export default function AboutPage() {
  const page = pageNosotrosEnContent

  return (
    <>
      <Hero data={page} />
      <Historia data={page} />
      <Valores data={page} />
      <Equipo data={page} />
      <VoluntariosHistoricos data={page} testimonials={nosotrosTestimonialsEn} />
      <HanEstadoConNosotros intro={page.pastVolunteersIntro} members={page.pastVolunteers} locale="en" />
      <Iniciativas data={page} />
      <Partners data={page} />
      <Legal data={page} locale="en" />
      <ClosingCta data={page} siteSettings={siteSettings} locale="en" />
    </>
  )
}
