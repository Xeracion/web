import Image from 'next/image'

import { Container } from '@/components/Container'
import type { Partner, SectionIntro } from '@/content/types'

import styles from './Partners.module.css'

interface PartnersData {
  partnersIntro?: SectionIntro
  partners?: Partner[]
}

export function Partners({ data }: { data: PartnersData }) {
  const partners = data.partners ?? []
  if (partners.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.partnersIntro?.heading && <h2 className={styles.heading}>{data.partnersIntro.heading}</h2>}
      <ul className={styles.list}>
        {partners.map((partner, i) => (
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
    </Container>
  )
}
