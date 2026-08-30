import type { ReactNode } from 'react'

import { RichText } from '@/components/RichText'
import type { RichTextValue } from '@/sanity/lib/queries'

import styles from './ClosingCtaSection.module.css'

interface ClosingCtaSectionProps {
  heading?: string
  text?: RichTextValue
  children?: ReactNode
}

export function ClosingCtaSection({ heading, text, children }: ClosingCtaSectionProps) {
  return (
    <section className={styles.section}>
      <h2>{heading}</h2>
      <RichText value={text} className={styles.text} />
      {children && <div className={styles.buttons}>{children}</div>}
    </section>
  )
}
