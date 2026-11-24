import type { Metadata } from 'next'

import { nosotrosTestimonialsEs, pageNosotrosEs } from '@/content/nosotros'
import { siteSettings } from '@/content/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

import { Doors } from '@/app/(main)/_sections/Doors'

import { Anuarios } from './_sections/Anuarios'
import { Cifras } from './_sections/Cifras'
import { ClosingCta } from './_sections/ClosingCta'
import { EnResumen } from './_sections/EnResumen'
import { Equipo } from './_sections/Equipo'
import { Hero } from './_sections/Hero'
import { Historia } from './_sections/Historia'
import { Iniciativas } from './_sections/Iniciativas'
import { IniciativasLocales } from './_sections/IniciativasLocales'
import { Partners } from './_sections/Partners'
import { QueHacemos } from './_sections/QueHacemos'
import { Testimonios } from './_sections/Testimonios'
import { Valores } from './_sections/Valores'
import { VoluntariosHistoricos } from './_sections/VoluntariosHistoricos'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ title: 'Nosotros', description: pageNosotrosEs.heroText, path: '/nosotros/' })
}

export default function NosotrosPage() {
  const page = pageNosotrosEs

  return (
    <>
      <Hero data={page} />
      <Cifras data={page} />
      <EnResumen data={page} />
      <QueHacemos data={page} />
      <IniciativasLocales data={page} />
      <Historia data={page} />
      <Anuarios data={page} />
      <Valores data={page} />
      <Equipo data={page} />
      <VoluntariosHistoricos testimonials={nosotrosTestimonialsEs} />
      <Testimonios />
      <Iniciativas data={page} />
      <Doors heading={page.puertasHeading} items={page.puertas} />
      <Partners data={page} />
      <ClosingCta data={page} siteSettings={siteSettings} />
    </>
  )
}
