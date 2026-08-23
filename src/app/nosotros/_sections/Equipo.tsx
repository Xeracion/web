import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { PageNosotrosData } from '@/sanity/lib/queries'

import styles from './Equipo.module.css'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Equipo({ data }: { data: PageNosotrosData }) {
  const members = data.teamMembers ?? []
  if (members.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.equipoIntro?.eyebrow && <Eyebrow accent>{data.equipoIntro.eyebrow}</Eyebrow>}
      {data.equipoIntro?.heading && <h2>{data.equipoIntro.heading}</h2>}
      <div className={styles.grid}>
        {members.map((member, i) => {
          const name = member.name ?? ''
          const content = (
            <>
              <span className={styles.avatar} aria-hidden="true">
                {initials(name)}
              </span>
              <p className={styles.name}>{name}</p>
              <p className={styles.role}>{member.role}</p>
            </>
          )

          return member.linkUrl ? (
            <a key={i} href={member.linkUrl} className={styles.member} target="_blank" rel="noreferrer">
              {content}
            </a>
          ) : (
            <div key={i} className={styles.member}>
              {content}
            </div>
          )
        })}
      </div>
    </Container>
  )
}
