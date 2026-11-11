import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import type { SectionIntro, TeamMember } from '@/content/types'

import styles from './Equipo.module.css'

interface EquipoData {
  equipoIntro?: SectionIntro
  teamMembers?: TeamMember[]
}

const MORE_LABEL = { es: 'Quiero conocer al equipo', gl: 'Quero coñecer o equipo' }

export function Equipo({ data, locale = 'es' }: { data: EquipoData; locale?: 'es' | 'gl' }) {
  const members = data.teamMembers ?? []
  if (members.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.equipoIntro?.heading && <h2>{data.equipoIntro.heading}</h2>}
      <div className={styles.grid} data-reveal-stagger>
        {members.map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>
      <ButtonLink href="/nosotros/equipo/" className={styles.more}>
        {MORE_LABEL[locale]}
      </ButtonLink>
    </Container>
  )
}
