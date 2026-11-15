import type { ReactNode } from 'react'

import { Prose } from '@/components/Prose'

import styles from './ClosingCtaSection.module.css'

interface ClosingCtaSectionProps {
  /** Ancla para enlaces internos (#id). */
  id?: string
  heading?: string
  text?: string | string[]
  children?: ReactNode
  logo?: ReactNode
}

export function ClosingCtaSection({ id, heading, text, children, logo }: ClosingCtaSectionProps) {
  return (
    <section id={id} className={styles.band} data-closing-band>
      <div className={styles.section}>
        {logo}
        <h2>{heading}</h2>
        <Prose value={text} className={styles.text} />
        {children && <div className={styles.buttons}>{children}</div>}
      </div>
    </section>
  )
}
