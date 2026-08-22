import { Container } from '@/components/Container'
import type { HomeData } from '@/sanity/lib/queries'

import styles from './Stats.module.css'

export function Stats({ data }: { data: HomeData }) {
  if (!data.stats || data.stats.length === 0) return null

  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        {data.stats.map((stat, i) => (
          <div key={i}>
            <p className={styles.number}>{stat.value}</p>
            <div className={styles.line} />
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
