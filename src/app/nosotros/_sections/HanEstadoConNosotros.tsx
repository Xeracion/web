'use client'

import { useState } from 'react'

import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import type { SectionIntroData, TeamMemberData } from '@/sanity/lib/queries'

import styles from './HanEstadoConNosotros.module.css'

const VISIBLE_STEP = 8

interface HanEstadoConNosotrosProps {
  intro?: SectionIntroData
  members: TeamMemberData[]
}

export function HanEstadoConNosotros({ intro, members }: HanEstadoConNosotrosProps) {
  const [visibleCount, setVisibleCount] = useState(VISIBLE_STEP)

  if (members.length === 0) return null

  const visibleMembers = members.slice(0, visibleCount)
  const hasMore = visibleCount < members.length

  return (
    <Container as="section" className={styles.section}>
      {intro?.eyebrow && <Eyebrow accent>{intro.eyebrow}</Eyebrow>}
      <h2>{intro?.heading || 'Han estado con nosotros'}</h2>
      <div className={styles.grid}>
        {visibleMembers.map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.loadMore}>
          <ButtonSecondary onClick={() => setVisibleCount((count) => count + VISIBLE_STEP)}>
            Cargar más
          </ButtonSecondary>
        </div>
      )}
    </Container>
  )
}
