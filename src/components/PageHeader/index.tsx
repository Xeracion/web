import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Prose } from '@/components/Prose'

import styles from './PageHeader.module.css'

interface PageHeaderProps {
  eyebrow?: string
  heading: string
  text?: string | string[]
}

export function PageHeader({ eyebrow, heading, text }: PageHeaderProps) {
  return (
    <Container as="section" className={styles.header}>
      {eyebrow && <Eyebrow accent>{eyebrow}</Eyebrow>}
      <h1>{heading}</h1>
      <Prose value={text} className={styles.text} />
    </Container>
  )
}
