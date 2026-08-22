import type { ReactNode } from 'react'

import styles from './ClosingCtaSection.module.css'

interface ClosingCtaSectionProps {
  heading?: string
  text?: string
  children?: ReactNode
}

export function ClosingCtaSection({ heading, text, children }: ClosingCtaSectionProps) {
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      {text && <p className={styles.text}>{text}</p>}
      {children && <div className={styles.buttons}>{children}</div>}
    </section>
  )
}
