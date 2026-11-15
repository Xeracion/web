import { Container } from '@/components/Container'
import type { ResumenItem, SectionIntro } from '@/content/types'

import styles from './EnResumen.module.css'

interface EnResumenData {
  resumenIntro?: SectionIntro
  resumen?: ResumenItem[]
}

// Ficha rápida para quien no nos conoce de nada (una persona joven o una
// institución): qué somos, dónde estamos, para quién, quién lo hace, cómo se
// financia y cómo hablar con nosotros.
export function EnResumen({ data }: { data: EnResumenData }) {
  const items = data.resumen ?? []
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.resumenIntro?.heading && <h2 className={styles.heading}>{data.resumenIntro.heading}</h2>}
      {data.resumenIntro?.text && <p className={styles.lead}>{data.resumenIntro.text}</p>}
      <dl className={styles.facts}>
        {items.map((item) => (
          <div key={item.label} className={styles.fact}>
            <dt>{item.label}</dt>
            <dd>{item.text}</dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}
