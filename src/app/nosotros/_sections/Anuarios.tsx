import { Container } from '@/components/Container'
import type { Anuario, SectionIntro } from '@/content/types'

import styles from './Anuarios.module.css'

interface AnuariosData {
  anuariosIntro?: SectionIntro
  anuarios?: Anuario[]
}

// Anuarios en PDF: portada, año y enlace de descarga.
export function Anuarios({ data }: { data: AnuariosData }) {
  const items = data.anuarios ?? []
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section} id="anuarios">
      {data.anuariosIntro?.heading && <h2>{data.anuariosIntro.heading}</h2>}
      {data.anuariosIntro?.text && <p className={styles.lead}>{data.anuariosIntro.text}</p>}
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.year}>
            <a href={item.href} download className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" width={496} height={702} loading="lazy" className={styles.cover} />
              <span className={styles.body}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.meta}>{item.meta}</span>
                <span className={styles.cta}>{item.ctaLabel} ↓</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  )
}
