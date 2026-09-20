import Image from 'next/image'

import type { TeamMember } from '@/content/types'

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

export function TeamMemberCard({ member }: { member: TeamMember }) {
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
      <p className={styles.role}>{member.role}</p>
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
