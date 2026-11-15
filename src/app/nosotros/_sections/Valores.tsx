import { Container } from '@/components/Container'
import type { SectionIntro, ValueItem } from '@/content/types'

import styles from './Valores.module.css'

// Un icono de línea por idea, en el mismo orden que `values`.
const ICONS = [
  // Movilidad: avión de papel
  <path key="m" d="M21 3 3 10.5l7 2.5 2.5 7L21 3Zm0 0-11 10" />,
  // Cooperación: dos aros enlazados
  <g key="c">
    <circle cx="9" cy="12" r="5" />
    <circle cx="15" cy="12" r="5" />
  </g>,
  // Democracia: urna con papeleta
  <g key="d">
    <path d="M4 13h16v7H4z" />
    <path d="M8 13V4.5h8V13" />
    <path d="m10 8.5 1.5 1.5 3-3" />
  </g>,
  // Tolerancia: mundo
  <g key="t">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
  </g>,
  // Salud: corazón
  <path key="s" d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  // Ecología: hoja
  <g key="e">
    <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14Z" />
    <path d="M5 19 13 11" />
  </g>,
]

interface ValoresData {
  valoresIntro?: SectionIntro
  values?: ValueItem[]
}

export function Valores({ data }: { data: ValoresData }) {
  const values = data.values ?? []
  if (values.length === 0) return null

  return (
    <div className={styles.wrapper}>
      <Container as="section" className={styles.section}>
        {data.valoresIntro?.heading && <h2>{data.valoresIntro.heading}</h2>}
        <div className={styles.grid} data-reveal-stagger>
          {values.map((value, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[i]}
                </svg>
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
