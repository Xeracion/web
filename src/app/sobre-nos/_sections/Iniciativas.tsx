import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { cn } from '@/lib/cn'
import type { PageSobreNosData } from '@/sanity/lib/queries'

import styles from './Iniciativas.module.css'

const COLOR_CLASS: Record<string, string> = {
  blue: styles.blue,
  green: styles.green,
  orange: styles.orange,
}

export function Iniciativas({ data }: { data: PageSobreNosData }) {
  const items = data.iniciativas ?? []
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.iniciativasIntro?.eyebrow && <Eyebrow accent>{data.iniciativasIntro.eyebrow}</Eyebrow>}
      {data.iniciativasIntro?.heading && <h2>{data.iniciativasIntro.heading}</h2>}
      <div className={styles.grid}>
        {items.map((item, i) => {
          const content = (
            <>
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <h4 className={styles.name}>{item.name}</h4>
              {item.description && <p className={styles.text}>{item.description}</p>}
            </>
          )
          const cardClass = cn(styles.card, COLOR_CLASS[item.colorScheme ?? 'blue'])

          return item.url ? (
            <a key={i} href={item.url} className={cardClass}>
              {content}
            </a>
          ) : (
            <div key={i} className={cardClass}>
              {content}
            </div>
          )
        })}
      </div>
    </Container>
  )
}
