import Link from 'next/link'

import { Container } from '@/components/Container'

import styles from './InstitutionalStrip.module.css'

export function InstitutionalStrip({ text, href }: { text?: string; href?: string }) {
  if (!text) return null

  return (
    <div className={styles.wrapper}>
      <Container>
        <Link href={href || '/nosotros/'} className={styles.link}>
          <p className={styles.text}>{text}</p>
          <span aria-hidden="true" className={styles.arrow}>
            →
          </span>
        </Link>
      </Container>
    </div>
  )
}
