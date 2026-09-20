import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { TeamMemberCard } from '@/components/TeamMemberCard'
import type { SectionIntro, TeamMember } from '@/content/types'

import styles from './Equipo.module.css'

interface EquipoData {
  equipoIntro?: SectionIntro
  teamMembers?: TeamMember[]
}

export function Equipo({ data }: { data: EquipoData }) {
  const members = data.teamMembers ?? []
  if (members.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.equipoIntro?.eyebrow && <Eyebrow accent>{data.equipoIntro.eyebrow}</Eyebrow>}
      {data.equipoIntro?.heading && <h2>{data.equipoIntro.heading}</h2>}
      <div className={styles.grid}>
        {members.map((member, i) => (
          <TeamMemberCard key={i} member={member} />
        ))}
      </div>
    </Container>
  )
}
