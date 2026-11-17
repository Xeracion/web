import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { TeamGroups } from '@/components/TeamGroups'
import { equipoGroupsEs, pageEquipoEs } from '@/content/equipo'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Equipo', description: pageEquipoEs.intro, path: '/nosotros/equipo/' })
}

// Estructura de anthropic.com/company/leadership: cabecera a dos columnas
// (titular · entradilla y botones) y grupos de personas, los primeros en
// tarjetas horizontales y el último en rejilla compacta.
export default function EquipoPage() {
  const page = pageEquipoEs

  return (
    <>
      <Container as="section" className={styles.header}>
        <h1 className={styles.heading}>{page.heading}</h1>
        <div>
          <p className={styles.intro}>{page.intro}</p>
          <div className={styles.buttons}>
            <ButtonPrimary href={page.primaryHref}>{page.primaryLabel}</ButtonPrimary>
            <ButtonSecondary href={page.secondaryHref}>{page.secondaryLabel}</ButtonSecondary>
          </div>
        </div>
      </Container>

      <TeamGroups groups={equipoGroupsEs} />
    </>
  )
}
