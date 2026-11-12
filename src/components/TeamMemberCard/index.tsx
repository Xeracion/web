import Image from 'next/image'

import { Flag } from '@/components/Flag'
import type { TeamMember } from '@/content/types'
import type { Locale } from '@/lib/i18n'

import styles from './TeamMemberCard.module.css'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function TeamMemberCard({ member, locale = 'es' }: { member: TeamMember; locale?: Locale }) {
  const name = member.name ?? ''
  const content = (
    <>
      {member.image ? (
        <Image src={member.image} alt="" width={112} height={112} className={styles.photo} />
      ) : (
        <span className={styles.avatar} aria-hidden="true">
          {initials(name)}
        </span>
      )}
      <p className={styles.name}>{name}</p>
      {member.role && <p className={styles.role}>{member.role}</p>}
      {member.country && (
        <p className={styles.role}>
          <Flag code={member.country} locale={locale} />
        </p>
      )}
    </>
  )

  return member.linkUrl ? (
    <a href={member.linkUrl} className={styles.member} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className={styles.member}>{content}</div>
  )
}
