import Image from 'next/image'

import { Container } from '@/components/Container'
import { Flag } from '@/components/Flag'
import type { EquipoGroup } from '@/content/equipo'
import type { TeamMember } from '@/content/types'

import styles from './TeamGroups.module.css'

type TeamLocale = 'es' | 'gl' | 'en'

const LABELS: Record<TeamLocale, { portrait: string; more: string }> = {
  es: { portrait: 'Retrato de', more: 'Leer más' },
  gl: { portrait: 'Retrato de', more: 'Ler máis' },
  en: { portrait: 'Portrait of', more: 'Read more' },
}

function Photo({ member, sizes, locale }: { member: TeamMember; sizes: string; locale: TeamLocale }) {
  return (
    <div className={styles.photo}>
      {member.image && (
        <Image src={member.image} alt={`${LABELS[locale].portrait} ${member.name}`} fill sizes={sizes} quality={90} />
      )}
    </div>
  )
}

// La presentación corta termina en «[…]» y «Leer más» despliega solo lo que
// falta (bioLong es el texto completo: no se repite lo ya leído).
function Bio({ member, locale }: { member: TeamMember; locale: TeamLocale }) {
  const long = typeof member.bioLong === 'string' ? [member.bioLong] : (member.bioLong ?? [])
  const short = member.bio?.replace(/\s*\[…\]\s*$/, '') ?? ''
  const rest =
    long.length > 0 && long[0].startsWith(short)
      ? [long[0].slice(short.length).trim(), ...long.slice(1)].filter(Boolean)
      : long

  if (!member.bio) return null
  if (rest.length === 0) return <p className={styles.bio}>{member.bio}</p>

  return (
    <div className={styles.bioWrap}>
      <p className={styles.bio}>
        {short}
        <span className={styles.ellipsis}> […]</span>
      </p>
      <details className={styles.more}>
        <summary>{LABELS[locale].more}</summary>
        {rest.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </details>
    </div>
  )
}

function PersonRow({ member, locale }: { member: TeamMember; locale: TeamLocale }) {
  return (
    <article className={styles.row}>
      <Photo member={member} locale={locale} sizes="(min-width: 1024px) 280px, (min-width: 768px) 40vw, 100vw" />
      <div className={styles.rowText}>
        {member.role && <p className={styles.role}>{member.role}</p>}
        <h3 className={styles.name}>
          {member.name}
          {member.country && <Flag code={member.country} locale={locale} className={styles.flag} />}
        </h3>
        {member.linkUrl && (
          <a href={member.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        )}
        <Bio member={member} locale={locale} />
      </div>
    </article>
  )
}

function PersonTile({ member, locale }: { member: TeamMember; locale: TeamLocale }) {
  return (
    <article className={styles.tile}>
      <Photo member={member} locale={locale} sizes="(min-width: 1024px) 180px, (min-width: 768px) 30vw, 50vw" />
      {member.role && <p className={styles.role}>{member.role}</p>}
      <h3 className={styles.tileName}>
        {member.name}
        {member.country && <Flag code={member.country} locale={locale} className={styles.flag} />}
      </h3>
      <Bio member={member} locale={locale} />
    </article>
  )
}

// Grupos de personas: los primeros en tarjetas horizontales (foto + cargo,
// nombre, bandera y presentación) y el último en rejilla compacta.
export function TeamGroups({ groups, locale = 'es' }: { groups: EquipoGroup[]; locale?: TeamLocale }) {
  return (
    <>
      {groups
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
                  <PersonRow key={member.name} member={member} locale={locale} />
                ))}
              </div>
            ) : (
              <div className={styles.grid}>
                {group.members.map((member) => (
                  <PersonTile key={member.name} member={member} locale={locale} />
                ))}
              </div>
            )}
          </Container>
        ))}
    </>
  )
}
