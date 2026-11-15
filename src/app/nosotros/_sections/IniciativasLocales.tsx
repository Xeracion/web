import Link from 'next/link'

import { Container } from '@/components/Container'
import type { SectionIntro } from '@/content/types'

import styles from './IniciativasLocales.module.css'

interface IniciativaLocal {
  name: string
  text: string
  href?: string
}

interface IniciativasLocalesData {
  iniciativasLocalesIntro?: SectionIntro
  iniciativasLocales?: { title: string; items: IniciativaLocal[] }[]
}

/** Iniciativas pequeñas en Ferrol (2021–2022), a continuación de «Lo que hacemos». */
export function IniciativasLocales({ data }: { data: IniciativasLocalesData }) {
  const groups = data.iniciativasLocales ?? []
  if (groups.length === 0) return null

  return (
    <Container as="section" id="iniciativas-locales" className={styles.section} aria-labelledby="iniciativas-locales-titulo">
      <div className={styles.head}>
        <h2 id="iniciativas-locales-titulo">{data.iniciativasLocalesIntro?.heading}</h2>
        {data.iniciativasLocalesIntro?.text && <p className={styles.lead}>{data.iniciativasLocalesIntro.text}</p>}
      </div>
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item.name} className={styles.item}>
                  <span className={styles.name}>
                    {item.href ? (
                      item.href.startsWith('/') ? (
                        <Link href={item.href}>{item.name}</Link>
                      ) : (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.name} <span aria-hidden="true">↗</span>
                        </a>
                      )
                    ) : (
                      item.name
                    )}
                  </span>
                  <span className={styles.text}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
