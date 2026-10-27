import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

import styles from './PageHeader.module.css'

interface PageHeaderProps {
  heading: string
  text?: string | string[]
}

export function PageHeader({ heading, text }: PageHeaderProps) {
  return (
    <Container as="section" className={styles.header}>
      <h1>{heading}</h1>
      <Prose value={text} className={styles.text} />
    </Container>
  )
}
