import Image from 'next/image'

import { Container } from '@/components/Container'
import type { Partner, SectionIntro } from '@/content/types'

import styles from './Partners.module.css'

interface PartnersGroup {
  heading: string
  items: Partner[]
}

interface PartnersData {
  partnersIntro?: SectionIntro
  partnersGroups?: PartnersGroup[]
}

export function Partners({ data }: { data: PartnersData }) {
  const groups = (data.partnersGroups ?? []).filter((g) => g.items.length > 0)
  if (groups.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.partnersIntro?.heading && <h2 className={styles.heading}>{data.partnersIntro.heading}</h2>}
      <div className={styles.groups}>
        {groups.map((group) => (
          <div key={group.heading} className={styles.group}>
            <h3 className={styles.groupHeading}>{group.heading}</h3>
            <ul className={styles.list}>
              {group.items.map((partner, i) => (
                <li key={i} className={styles.partner}>
                  {partner.image ? (
                    <Image
                      src={partner.image}
                      alt={partner.name ?? ''}
                      width={240}
                      height={80}
                      className={styles.logo}
                    />
                  ) : (
                    partner.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
