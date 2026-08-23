import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { PageSobreNosData } from '@/sanity/lib/queries'

import styles from './Valores.module.css'

export function Valores({ data }: { data: PageSobreNosData }) {
  const values = data.values ?? []
  if (values.length === 0) return null

  return (
    <div className={styles.wrapper}>
      <Container as="section" className={styles.section}>
        {data.valoresIntro?.eyebrow && <Eyebrow accent>{data.valoresIntro.eyebrow}</Eyebrow>}
        {data.valoresIntro?.heading && <h2>{data.valoresIntro.heading}</h2>}
        <div className={styles.grid}>
          {values.map((value, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {value.icon}
              </span>
              <h4>{value.title}</h4>
              {value.description && <p className={styles.text}>{value.description}</p>}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
