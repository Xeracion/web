import Image from 'next/image'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { urlFor } from '@/sanity/lib/image'
import type { PageNosotrosData } from '@/sanity/lib/queries'

import styles from './Partners.module.css'

export function Partners({ data }: { data: PageNosotrosData }) {
  const partners = data.partners ?? []
  if (partners.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.partnersIntro?.eyebrow && <Eyebrow>{data.partnersIntro.eyebrow}</Eyebrow>}
      <ul className={styles.list}>
        {partners.map((partner, i) => {
          const name = typeof partner === 'string' ? partner : partner.name
          const logo = typeof partner === 'string' ? undefined : partner.logo

          return (
            <li key={i} className={styles.partner}>
              {logo ? (
                <Image
                  src={urlFor(logo).url()}
                  alt={name ?? ''}
                  width={120}
                  height={40}
                  className={styles.logo}
                />
              ) : (
                name
              )}
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
