import type { Metadata } from 'next'

import { Cifras } from '@/app/nosotros/_sections/Cifras'
import { ClosingCta } from '@/app/nosotros/_sections/ClosingCta'
import { Doors } from '@/app/(main)/_sections/Doors'
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
import { pageNosotrosGl } from '@/content/gl/nosotros'
import { siteSettingsGl } from '@/content/gl/siteSettings'
import { nosotrosTestimonialsEs } from '@/content/nosotros'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Nós', description: pageNosotrosGl.heroText, locale: 'gl_ES', path: '/gl/nos/' })
}

// As citas son palabras reais de persoas: van no seu idioma orixinal.
export default function NosPage() {
  const page = pageNosotrosGl

  return (
    <>
      <Hero data={page} />
      <Cifras data={page} />
      <EnResumen data={page} />
      <QueHacemos data={page} />
      <IniciativasLocales data={page} />
      <Historia data={page} />
      <Valores data={page} />
      <Equipo data={page} locale="gl" />
      <VoluntariosHistoricos testimonials={nosotrosTestimonialsEs} locale="gl" />
      <Iniciativas data={page} />
      <Doors heading={page.puertasHeading} items={page.puertas} />
      <Partners data={page} />
      <ClosingCta data={page} siteSettings={siteSettingsGl} locale="gl" />
    </>
  )
}
