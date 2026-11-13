import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ClosingCtaSection } from '@/components/ClosingCtaSection'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { getProyectos, pageProyectosEs, type ProyectoData } from '@/content/proyectos'
import { buildPageMetadata } from '@/lib/metadata'

import { ProyectoCard } from './_components/ProyectoCard'
import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Proyectos anteriores', description: pageProyectosEs.intro })
}

/** Agrupa por año, del más reciente al más antiguo. */
function byYear(items: ProyectoData[]): [number, ProyectoData[]][] {
  const groups = new Map<number, ProyectoData[]>()
  for (const item of items) groups.set(item.anio, [...(groups.get(item.anio) ?? []), item])
  return [...groups.entries()].sort(([a], [b]) => b - a)
}

export default function ProyectosPage() {
  const page = pageProyectosEs
  const items = getProyectos()

  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />

      {byYear(items).map(([year, group]) => (
        <Container as="section" key={year} className={styles.year} aria-labelledby={`anio-${year}`}>
          <div className={styles.yearHead}>
            <h2 id={`anio-${year}`}>{year}</h2>
            <span className={styles.count}>
              {group.length} {group.length === 1 ? 'proyecto' : 'proyectos'}
            </span>
          </div>
          <ul className={styles.grid}>
            {group.map((proyecto) => (
              <li key={proyecto.slug}>
                <ProyectoCard proyecto={proyecto} />
              </li>
            ))}
          </ul>
        </Container>
      ))}

      <ClosingCtaSection heading={page.closingHeading} text={page.closingText}>
        <ButtonPrimary href="/experiencias/">{page.closingPrimaryLabel}</ButtonPrimary>
      </ClosingCtaSection>
    </>
  )
}
