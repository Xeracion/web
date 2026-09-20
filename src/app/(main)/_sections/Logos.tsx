import Image from 'next/image'

import { Container } from '@/components/Container'
import type { Partner } from '@/content/types'

import styles from './Logos.module.css'

export function Logos({ items }: { items?: Partner[] }) {
  if (!items || items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            {item.image ? (
              <Image src={item.image} alt={item.name} width={160} height={64} className={styles.logo} />
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </Container>
  )
}
