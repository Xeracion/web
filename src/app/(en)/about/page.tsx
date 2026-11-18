import type { Metadata } from 'next'

import { Doors } from '@/app/(main)/_sections/Doors'
import { Cifras } from '@/app/nosotros/_sections/Cifras'
import { ClosingCta } from '@/app/nosotros/_sections/ClosingCta'
import { EnResumen } from '@/app/nosotros/_sections/EnResumen'
import { Equipo } from '@/app/nosotros/_sections/Equipo'
import { Hero } from '@/app/nosotros/_sections/Hero'
import { Historia } from '@/app/nosotros/_sections/Historia'
import { Iniciativas } from '@/app/nosotros/_sections/Iniciativas'
import { IniciativasLocales } from '@/app/nosotros/_sections/IniciativasLocales'
import { Partners } from '@/app/nosotros/_sections/Partners'
import { QueHacemos } from '@/app/nosotros/_sections/QueHacemos'
import { Valores } from '@/app/nosotros/_sections/Valores'
import { VoluntariosHistoricos } from '@/app/nosotros/_sections/VoluntariosHistoricos'
import { nosotrosTestimonialsEn, pageNosotrosEn } from '@/content/en/nosotros'
import { siteSettingsEn } from '@/content/en/siteSettings'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'About us', description: pageNosotrosEn.heroText, locale: 'en_GB', path: '/about/' })
}

// Traducción de /nosotros/ (mismas secciones que /gl/nos/). Las citas son
// palabras reales de personas: van en su idioma original.
export default function AboutEnPage() {
  const page = pageNosotrosEn

  return (
    <>
      <Hero data={page} />
      <Cifras data={page} />
      <EnResumen data={page} />
      <QueHacemos data={page} />
      <IniciativasLocales data={page} />
      <Historia data={page} />
      <Valores data={page} />
      <Equipo data={page} locale="en" />
      <VoluntariosHistoricos testimonials={nosotrosTestimonialsEn} locale="en" />
      <Iniciativas data={page} />
      <Doors heading={page.puertasHeading} items={page.puertas} />
      <Partners data={page} />
      <ClosingCta data={page} siteSettings={siteSettingsEn} locale="en" />
    </>
  )
}
