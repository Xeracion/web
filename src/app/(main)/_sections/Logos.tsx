import Image from 'next/image'

import { Container } from '@/components/Container'
import { urlFor } from '@/sanity/lib/image'
import type { InstitutionalLogoData } from '@/sanity/lib/queries'

import styles from './Logos.module.css'

export function Logos({ items }: { items?: InstitutionalLogoData[] }) {
  if (!items || items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            {item.logo ? (
              <Image
                src={urlFor(item.logo).url()}
                alt={item.name ?? ''}
                width={160}
                height={64}
                className={styles.logo}
              />
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </Container>
  )
}
