import type { Metadata } from 'next'
import { Suspense } from 'react'

import { ButtonLink } from '@/components/ButtonLink'
import { CatalogEmptyState } from '@/components/CatalogEmptyState'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { getExperiencias, getExperienciasDestacadas, getFichasExperiencias } from '@/content/experiencias'
import { homeEs } from '@/content/home'
import { siteSettings } from '@/content/siteSettings'
import { endOfDayMadrid, getGoogleCalendarEvents } from '@/lib/googleCalendar'
import { buildPageMetadata } from '@/lib/metadata'

import { Agenda } from './_sections/Agenda'
import { ClosingCta } from './_sections/ClosingCta'
import { Doors } from './_sections/Doors'
import { Hero } from './_sections/Hero'
import { Figures } from './_sections/Figures'
import { Logos } from './_sections/Logos'
import { Projects } from './_sections/Projects'

// La agenda sale de Google Calendar: se regenera cada 5 minutos para que la
// semana que se enseña sea siempre la actual.
export const revalidate = 300

export function generateMetadata(): Metadata {
  return buildPageMetadata({ description: homeEs.intro, path: '/' })
}

export default async function HomePage() {
  // La agenda enseña hoy y los cuatro días siguientes (hora de Madrid).
  const events = await getGoogleCalendarEvents(siteSettings.googleCalendarId, {
    timeMax: endOfDayMadrid(4),
    maxResults: 10,
  })
  // Si no hay ninguna marcada como destacada, la home enseña todas las
  // activas antes que quedarse sin catálogo.
  const destacadas = getExperienciasDestacadas()
  const experiencias = destacadas.length > 0 ? destacadas : getExperiencias()

  return (
    <>
      <Hero data={homeEs} />
      <Figures
        heading={homeEs.figuresHeading}
        text={homeEs.figuresText}
        items={homeEs.figures}
        backing={homeEs.figuresBacking}
        linkLabel={homeEs.figuresLinkLabel}
        linkHref={homeEs.figuresLinkHref}
      />
      <Logos items={homeEs.institutionalLogos} />
      <Suspense fallback={null}>
        <ExperienciasCatalog
          id="experiencias"
          items={experiencias}
          intro={homeEs.catalogIntro}
          hideFilters
          emptyState={<CatalogEmptyState />}
          footer={<ButtonLink href="/experiencias/">{homeEs.catalogAllLabel}</ButtonLink>}
        />
      </Suspense>
      <Projects
        id="proyectos"
        heading={homeEs.projectsHeading}
        text={homeEs.projectsText}
        items={homeEs.projects}
      />
      <Doors heading={homeEs.doorsHeading} items={homeEs.doors} />
      <Agenda
        heading={homeEs.agendaHeading}
        linkLabel={homeEs.agendaLinkLabel}
        events={events}
        fichas={getFichasExperiencias()}
      />
      <ClosingCta home={homeEs} siteSettings={siteSettings} />
    </>
  )
}
