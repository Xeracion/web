import Link from 'next/link'

import { Container } from '@/components/Container'
import type { Initiative, SectionIntro } from '@/content/types'
import { cn } from '@/lib/cn'

import styles from './Iniciativas.module.css'

const COLOR_CLASS: Record<string, string> = {
  blue: styles.blue,
  green: styles.green,
  orange: styles.orange,
}

interface IniciativasData {
  iniciativasIntro?: SectionIntro
  iniciativas?: Initiative[]
}

const isExternal = (url: string) => /^https?:\/\//.test(url)

export function Iniciativas({ data }: { data: IniciativasData }) {
  const items = data.iniciativas ?? []
  if (items.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      {data.iniciativasIntro?.heading && <h2>{data.iniciativasIntro.heading}</h2>}
      <div className={styles.grid} data-reveal-stagger>
        {items.map((item, i) => {
          const content = (
            <>
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <h4 className={styles.name}>{item.name}</h4>
              {item.description && <p className={styles.text}>{item.description}</p>}
              {item.url && (
                <span className={styles.more} aria-hidden="true">
                  {isExternal(item.url) ? '↗' : '→'}
                </span>
              )}
            </>
          )
          const cardClass = cn(styles.card, COLOR_CLASS[item.colorScheme ?? 'blue'])

          if (!item.url) {
            return (
              <div key={i} className={cardClass}>
                {content}
              </div>
            )
          }

          const linkClass = cn(cardClass, styles.linked)
          return isExternal(item.url) ? (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {content}
            </a>
          ) : (
            <Link key={i} href={item.url} className={linkClass}>
              {content}
            </Link>
          )
        })}
      </div>
    </Container>
  )
}
