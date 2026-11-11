import type { Metadata } from 'next'

import { ClosingCta } from '@/app/nosotros/_sections/ClosingCta'
import { Equipo } from '@/app/nosotros/_sections/Equipo'
import { HanEstadoConNosotros } from '@/app/nosotros/_sections/HanEstadoConNosotros'
import { Hero } from '@/app/nosotros/_sections/Hero'
import { Historia } from '@/app/nosotros/_sections/Historia'
import { Iniciativas } from '@/app/nosotros/_sections/Iniciativas'
import { Legal } from '@/app/nosotros/_sections/Legal'
import { Partners } from '@/app/nosotros/_sections/Partners'
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
      <Historia data={page} />
      <Valores data={page} />
      <Equipo data={page} locale="gl" />
      <VoluntariosHistoricos data={page} testimonials={nosotrosTestimonialsEs} />
      <HanEstadoConNosotros intro={page.pastVolunteersIntro} members={page.pastVolunteers} locale="gl" />
      <Iniciativas data={page} />
      <Partners data={page} />
      <Legal data={page} locale="gl" />
      <ClosingCta data={page} siteSettings={siteSettingsGl} locale="gl" />
    </>
  )
}
