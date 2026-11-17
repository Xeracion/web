import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { TeamGroups } from '@/components/TeamGroups'
import { equipoGroupsGl, pageEquipoGl } from '@/content/gl/equipo'
import { buildPageMetadata } from '@/lib/metadata'

import styles from '@/app/nosotros/equipo/page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Equipo', description: pageEquipoGl.intro, locale: 'gl_ES', path: '/gl/nos/equipo/' })
}

// Versión galega de /nosotros/equipo/ (mesma estrutura).
export default function EquipoGlPage() {
  const page = pageEquipoGl

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

      <TeamGroups groups={equipoGroupsGl} locale="gl" />
    </>
  )
}
