import { AnimatedNumber } from '@/components/AnimatedNumber'
import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'
import type { StatItem } from '@/content/types'

import styles from './Figures.module.css'

interface FiguresProps {
  heading?: string
  text?: string
  items: StatItem[]
  backing?: string
  linkLabel?: string
  linkHref?: string
}

// Quiénes somos, en cifras. Sustituye a la antigua franja institucional de
// una línea: es la sección que lee quien llega de parte de una institución.
export function Figures({ heading, text, items, backing, linkLabel, linkHref }: FiguresProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          {heading && <h2>{heading}</h2>}
          {text && <p className={styles.intro}>{text}</p>}
        </div>
        <dl className={styles.grid} data-reveal-stagger>
          {items.map((item) => (
            <div key={item.label} className={styles.item}>
              <dt className={styles.label}>{item.label}</dt>
              {/* Los años (2013) no se cuentan desde cero: solo las cantidades. */}
              {/^\d{4}$/.test(item.value ?? '') ? (
                <dd className={styles.number}>{item.value}</dd>
              ) : (
                <AnimatedNumber as="dd" value={item.value ?? ''} className={styles.number} />
              )}
            </div>
          ))}
        </dl>
        {backing && <p className={styles.backing}>{backing}</p>}
        {linkLabel && linkHref && <ButtonLink href={linkHref}>{linkLabel}</ButtonLink>}
      </Container>
    </section>
  )
}
