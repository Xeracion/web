import { AnimatedNumber } from '@/components/AnimatedNumber'
import { Container } from '@/components/Container'
import type { SectionIntro, StatItem } from '@/content/types'

import styles from './Cifras.module.css'

interface CifrasData {
  cifrasIntro?: SectionIntro
  cifras?: StatItem[]
}

// Banda de cifras: cada número cuenta desde 0 cuando entra en pantalla
// (AnimatedNumber; sin animación si se pide movimiento reducido).
export function Cifras({ data }: { data: CifrasData }) {
  const items = data.cifras ?? []
  if (items.length === 0) return null

  return (
    <div className={styles.wrapper}>
      <Container as="section" className={styles.section}>
        {data.cifrasIntro?.heading && <h2 className={styles.heading}>{data.cifrasIntro.heading}</h2>}
        <dl className={styles.grid}>
          {items.map((item) => (
            <div key={item.label} className={styles.item}>
              <dt className={styles.label}>{item.label}</dt>
              <dd className={styles.value}>
                <AnimatedNumber value={item.value ?? ''} as="span" duration={1600} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}
