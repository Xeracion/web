'use client'

import { useState } from 'react'

import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import type { SectionIntroData, TeamMemberData } from '@/sanity/lib/queries'

import styles from './HanEstadoConNosotros.module.css'

const VISIBLE_STEP = 8

const COPY = {
  es: { fallbackHeading: 'Han estado con nosotros', loadMore: 'Cargar más' },
  en: { fallbackHeading: 'Have been with us', loadMore: 'Load more' },
}

interface HanEstadoConNosotrosProps {
  intro?: SectionIntroData
  members: TeamMemberData[]
  locale?: 'es' | 'en'
}

export function HanEstadoConNosotros({ intro, members, locale = 'es' }: HanEstadoConNosotrosProps) {
  const [visibleCount, setVisibleCount] = useState(VISIBLE_STEP)
  const copy = COPY[locale]

  if (members.length === 0) return null

  const visibleMembers = members.slice(0, visibleCount)
  const hasMore = visibleCount < members.length

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      <h2>{intro?.heading || copy.fallbackHeading}</h2>
      <div className={styles.grid}>
        {visibleMembers.map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMore}>
          <ButtonSecondary onClick={() => setVisibleCount((count) => count + VISIBLE_STEP)}>
            {copy.loadMore}
          </ButtonSecondary>
        </div>
      )}
    </Container>
  )
}
