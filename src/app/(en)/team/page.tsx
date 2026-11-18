import type { Metadata } from 'next'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { TeamGroups } from '@/components/TeamGroups'
import { equipoGroupsEn, pageTeamEn } from '@/content/en/pages'
import { buildPageMetadata } from '@/lib/metadata'

import styles from '@/app/nosotros/equipo/page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Team', description: pageTeamEn.intro, locale: 'en_GB', path: '/team/' })
}

// Traducción de /nosotros/equipo/ (misma estructura).
export default function TeamEnPage() {
  const page = pageTeamEn

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

      <TeamGroups groups={equipoGroupsEn} locale="en" />
    </>
  )
}
