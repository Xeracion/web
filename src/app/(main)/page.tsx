import type { Metadata } from 'next'
import { Suspense } from 'react'

import { ButtonLink } from '@/components/ButtonLink'
import { CatalogEmptyState } from '@/components/CatalogEmptyState'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { homeEs, homeEsTestimonials } from '@/content/home'
import { siteSettings } from '@/content/siteSettings'
import { getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'
import { getExperiencias, getExperienciasDestacadas } from '@/sanity/lib/queries'

import { Agenda } from './_sections/Agenda'
import { ClosingCta } from './_sections/ClosingCta'
import { Doors } from './_sections/Doors'
import { Hero } from './_sections/Hero'
import { InstitutionalStrip } from './_sections/InstitutionalStrip'
import { Logos } from './_sections/Logos'
import { Testimonials } from './_sections/Testimonials'

// Sin esto, la página se genera estática en build time y, si esa única
// llamada a Sanity falla (red, límite de tasa, lo que sea), el catálogo se
// queda vacío para siempre hasta el próximo deploy — getExperienciasDestacadas
// ya degrada a [] en vez de romper el build, pero eso no evita quedarse
// pillado en ese estado. Con revalidate, Next reintenta en segundo plano
// cada 5 minutos y se autocorrige solo.
export const revalidate = 300

export function generateMetadata(): Metadata {
  return buildPageMetadata({ description: homeEs.intro })
}

export default async function HomePage() {
  const [destacadas, events] = await Promise.all([
    getExperienciasDestacadas(),
    getGoogleCalendarEvents(siteSettings.googleCalendarId, { maxResults: 3 }),
  ])
  // Si nadie ha marcado ninguna como destacada, la home enseña todas las
  // activas antes que quedarse sin catálogo.
  const experiencias = destacadas.length > 0 ? destacadas : await getExperiencias()

  return (
    <>
      <Hero data={homeEs} />
      <Suspense fallback={null}>
        <ExperienciasCatalog
          id="experiencias"
          items={experiencias}
          intro={homeEs.catalogIntro}
          forceGrouped
          emptyState={<CatalogEmptyState />}
          footer={<ButtonLink href="/experiencias/">{homeEs.catalogAllLabel}</ButtonLink>}
        />
      </Suspense>
      <Agenda heading={homeEs.agendaHeading} linkLabel={homeEs.agendaLinkLabel} events={events} />
      <Testimonials heading={homeEs.testimonialsHeading} items={homeEsTestimonials} />
      <InstitutionalStrip text={homeEs.institutionalText} href={homeEs.institutionalLinkHref} />
      <Logos items={homeEs.institutionalLogos} />
      <Doors heading={homeEs.doorsHeading} items={homeEs.doors} />
      <ClosingCta home={homeEs} siteSettings={siteSettings} />
    </>
  )
}
