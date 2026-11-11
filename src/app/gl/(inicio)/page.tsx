import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Agenda } from '@/app/(main)/_sections/Agenda'
import { ClosingCta } from '@/app/(main)/_sections/ClosingCta'
import { Doors } from '@/app/(main)/_sections/Doors'
import { Figures } from '@/app/(main)/_sections/Figures'
import { Hero } from '@/app/(main)/_sections/Hero'
import { Logos } from '@/app/(main)/_sections/Logos'
import { Projects } from '@/app/(main)/_sections/Projects'
import { ButtonLink } from '@/components/ButtonLink'
import { CatalogEmptyState } from '@/components/CatalogEmptyState'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { getExperiencias, getExperienciasDestacadas, localizeExperiencia } from '@/content/experiencias'
import { homeGl } from '@/content/gl/home'
import { siteSettingsGl } from '@/content/gl/siteSettings'
import { endOfWeekMadrid, getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'

// Portada en galego: mesmas seccións que a de castelán (src/app/(main)/page.tsx).
export const revalidate = 300

export function generateMetadata(): Metadata {
  return buildPageMetadata({ description: homeGl.intro, locale: 'gl_ES', path: '/gl/' })
}

export default async function InicioGlPage() {
  const events = await getGoogleCalendarEvents(siteSettingsGl.googleCalendarId, {
    timeMax: endOfWeekMadrid(),
    maxResults: 5,
  })
  const destacadas = getExperienciasDestacadas()
  const experiencias = (destacadas.length > 0 ? destacadas : getExperiencias()).map((item) =>
    localizeExperiencia(item, 'gl'),
  )

  return (
    <>
      <Hero data={homeGl} />
      <Agenda
        heading={homeGl.agendaHeading}
        linkLabel={homeGl.agendaLinkLabel}
        events={events}
        agendaHref="/gl/axenda/#agenda"
        locale="gl"
      />
      <Suspense fallback={null}>
        <ExperienciasCatalog
          id="experiencias"
          items={experiencias}
          intro={homeGl.catalogIntro}
          forceGrouped
          locale="gl"
          emptyState={<CatalogEmptyState locale="gl" />}
          footer={<ButtonLink href="/gl/experiencias/">{homeGl.catalogAllLabel}</ButtonLink>}
        />
      </Suspense>
      <Projects id="proxectos" heading={homeGl.projectsHeading} text={homeGl.projectsText} items={homeGl.projects} />
      <Figures
        heading={homeGl.figuresHeading}
        text={homeGl.figuresText}
        items={homeGl.figures}
        backing={homeGl.figuresBacking}
        linkLabel={homeGl.figuresLinkLabel}
        linkHref={homeGl.figuresLinkHref}
      />
      <Logos items={homeGl.institutionalLogos} />
      <Doors heading={homeGl.doorsHeading} items={homeGl.doors} />
      <ClosingCta home={homeGl} siteSettings={siteSettingsGl} locale="gl" />
    </>
  )
}
