import { Container } from '@/components/Container'
import type { InfoColumn } from '@/content/types'

import styles from './PracticalInfo.module.css'

interface PracticalInfoProps {
  columns: Array<InfoColumn | undefined>
}

export function PracticalInfo({ columns }: PracticalInfoProps) {
  const items = columns.filter((c): c is InfoColumn => Boolean(c?.heading))
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      <div className={styles.grid}>
        {items.map((column, i) => (
          <div key={i}>
            <h4>{column.heading}</h4>
            {column.text && <p className={styles.text}>{column.text}</p>}
          </div>
        ))}
      </div>
    </Container>
  )
}
