import { Container } from '@/components/Container'
import type { InfoColumnData } from '@/sanity/lib/queries'

import styles from './PracticalInfo.module.css'

interface PracticalInfoProps {
  columns: Array<InfoColumnData | undefined>
}

export function PracticalInfo({ columns }: PracticalInfoProps) {
  const items = columns.filter((c): c is InfoColumnData => Boolean(c?.heading))
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
