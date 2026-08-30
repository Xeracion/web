import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { PageMentoresData } from '@/sanity/lib/queries'

import styles from './Beneficios.module.css'

export function Beneficios({ data }: { data: PageMentoresData }) {
  const beneficios = data.beneficios ?? []
  if (beneficios.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.beneficiosIntro?.eyebrow && <Eyebrow accent>{data.beneficiosIntro.eyebrow}</Eyebrow>}
      {data.beneficiosIntro?.heading && <h2>{data.beneficiosIntro.heading}</h2>}
      <div className={styles.grid}>
        {beneficios.map((item, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <h4>{item.title}</h4>
            {item.description && <p className={styles.text}>{item.description}</p>}
          </div>
        ))}
      </div>
    </Container>
  )
}
