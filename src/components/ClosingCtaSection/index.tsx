import type { ReactNode } from 'react'

import { Prose } from '@/components/Prose'

import styles from './ClosingCtaSection.module.css'

interface ClosingCtaSectionProps {
  heading?: string
  text?: string | string[]
  children?: ReactNode
}

export function ClosingCtaSection({ heading, text, children }: ClosingCtaSectionProps) {
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <Prose value={text} className={styles.text} />
      {children && <div className={styles.buttons}>{children}</div>}
    </section>
  )
}
