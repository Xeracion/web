import type { Metadata } from 'next'

import { nosotrosTestimonialsEs, pageNosotrosEs } from '@/content/nosotros'
import { siteSettings } from '@/content/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import { ClosingCta } from './_sections/ClosingCta'
import { Equipo } from './_sections/Equipo'
import { HanEstadoConNosotros } from './_sections/HanEstadoConNosotros'
import { Hero } from './_sections/Hero'
import { Historia } from './_sections/Historia'
import { Iniciativas } from './_sections/Iniciativas'
import { Legal } from './_sections/Legal'
import { Partners } from './_sections/Partners'
import { Valores } from './_sections/Valores'
import { VoluntariosHistoricos } from './_sections/VoluntariosHistoricos'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ title: 'Sobre nós', description: pageNosotrosEs.heroText })
}

export default function NosotrosPage() {
  const page = pageNosotrosEs

  return (
    <>
      <Hero data={page} />
      <Historia data={page} />
      <Valores data={page} />
      <Equipo data={page} />
      <VoluntariosHistoricos data={page} testimonials={nosotrosTestimonialsEs} />
      <HanEstadoConNosotros intro={page.pastVolunteersIntro} members={page.pastVolunteers} />
      <Iniciativas data={page} />
      <Partners data={page} />
      <Legal data={page} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
