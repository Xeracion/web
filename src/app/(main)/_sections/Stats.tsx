import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import type { HomeBaseData } from '@/sanity/lib/queries'

import styles from './Stats.module.css'

export function Stats({ data }: { data: HomeBaseData }) {
  if (!data.stats || data.stats.length === 0) return null

  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        {data.stats.map((stat, i) => (
          <div key={i}>
            <AnimatedNumber value={stat.value ?? ''} className={styles.number} />
            <div className={styles.line} />
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
