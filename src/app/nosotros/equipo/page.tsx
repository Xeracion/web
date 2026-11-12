import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonPrimary } from '@/components/ButtonPrimary'
import { ButtonSecondary } from '@/components/ButtonSecondary'
import { Container } from '@/components/Container'
import { Flag } from '@/components/Flag'
import { equipoGroupsEs, pageEquipoEs } from '@/content/equipo'
import type { TeamMember } from '@/content/types'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Equipo', description: pageEquipoEs.intro })
}

function Photo({ member, sizes }: { member: TeamMember; sizes: string }) {
  return (
    <div className={styles.photo}>
      {member.image && <Image src={member.image} alt={`Retrato de ${member.name}`} fill sizes={sizes} />}
    </div>
  )
}

function Bio({ member }: { member: TeamMember }) {
  const long = typeof member.bioLong === 'string' ? [member.bioLong] : member.bioLong
  return (
    <>
      {member.bio && <p className={styles.bio}>{member.bio}</p>}
      {long && long.length > 0 && (
        <details className={styles.more}>
          <summary>Leer más</summary>
          {long.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </details>
      )}
    </>
  )
}

function PersonRow({ member }: { member: TeamMember }) {
  return (
    <article className={styles.row}>
      <Photo member={member} sizes="(min-width: 1024px) 280px, (min-width: 768px) 40vw, 100vw" />
      <div className={styles.rowText}>
        {member.role && <p className={styles.role}>{member.role}</p>}
        <h3 className={styles.name}>
          {member.name}
          {member.country && <Flag code={member.country} className={styles.flag} />}
        </h3>
        {member.linkUrl && (
          <a href={member.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        )}
        <Bio member={member} />
      </div>
    </article>
  )
}

function PersonTile({ member }: { member: TeamMember }) {
  return (
    <article className={styles.tile}>
      <Photo member={member} sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 50vw" />
      {member.role && <p className={styles.role}>{member.role}</p>}
      <h3 className={styles.tileName}>
        {member.name}
        {member.country && <Flag code={member.country} className={styles.flag} />}
      </h3>
      <Bio member={member} />
    </article>
  )
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

      {equipoGroupsEs
        .filter((group) => group.members.length > 0)
        .map((group) => (
          <Container
            as="section"
            key={group.heading ?? group.layout}
            className={group.heading ? styles.group : styles.groupCont}
          >
            {group.heading && <h2 className={styles.groupHeading}>{group.heading}</h2>}
            {group.layout !== 'grid' ? (
              <div className={group.layout === 'cards' ? styles.cards : styles.rows}>
                {group.members.map((member) => (
                  <PersonRow key={member.name} member={member} />
                ))}
              </div>
            ) : (
              <div className={styles.grid}>
                {group.members.map((member) => (
                  <PersonTile key={member.name} member={member} />
                ))}
              </div>
            )}
          </Container>
        ))}
    </>
  )
}
