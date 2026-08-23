import Image from 'next/image'

import { urlFor } from '@/sanity/lib/image'
import type { TeamMemberData } from '@/sanity/lib/queries'

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

export function TeamMemberCard({ member }: { member: TeamMemberData }) {
  const name = member.name ?? ''
  const content = (
    <>
      {member.photo ? (
        <Image
          src={urlFor(member.photo).width(224).height(224).url()}
          alt=""
          width={112}
          height={112}
          className={styles.photo}
        />
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
