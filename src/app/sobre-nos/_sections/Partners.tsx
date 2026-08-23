import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import type { PageSobreNosData } from '@/sanity/lib/queries'

import styles from './Partners.module.css'

export function Partners({ data }: { data: PageSobreNosData }) {
  const partners = data.partners ?? []
  if (partners.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.partnersIntro?.eyebrow && <Eyebrow>{data.partnersIntro.eyebrow}</Eyebrow>}
      <ul className={styles.list}>
        {partners.map((partner, i) => (
          <li key={i} className={styles.partner}>
            {partner}
          </li>
        ))}
      </ul>
    </Container>
  )
}
