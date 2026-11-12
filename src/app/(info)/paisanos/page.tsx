import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { pagePaisanosEs, paisanosEs } from '@/content/paisanos'
import { buildPageMetadata } from '@/lib/metadata'

import { PaisanoCard } from './_components/PaisanoCard'
import { Podcast } from './_components/Podcast'
import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({ title: 'Paisanos', description: pagePaisanosEs.intro })
}

export default function PaisanosPage() {
  const page = pagePaisanosEs
  const [cover, ...rest] = paisanosEs

  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />

      <Container as="section" className={styles.cover} aria-label="Historia destacada">
        <Link href={`/paisanos/${cover.slug}/`} className={styles.coverLink}>
          <div className={styles.coverPhoto}>
            <Image
              src={cover.image}
              alt={cover.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              style={{ objectPosition: cover.imageFocus }}
            />
          </div>
          <div className={styles.coverText}>
            <span className={styles.tag}>Historia 01 · Portada</span>
            <h2 className={styles.coverName}>{cover.name}</h2>
            {cover.pullQuote ? <blockquote className={styles.coverQuote}>{cover.pullQuote}</blockquote> : null}
            <p className={styles.coverLead}>{cover.summary}</p>
            <span className={styles.coverCta}>
              Leer su historia <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </Container>

      <Container as="section" className={styles.stories}>
        <div className={styles.sectionHead}>
          <h2>{page.storiesIntro.heading}</h2>
          <span className={styles.count}>{paisanosEs.length} historias · Ferrol</span>
        </div>
        <div className={styles.grid}>
          {rest.map((paisano, i) => (
            <div key={paisano.slug} className={styles.cell}>
              <PaisanoCard paisano={paisano} number={i + 2} wide={i % 5 === 0 || (i === rest.length - 1 && i % 5 === 0)} />
            </div>
          ))}
        </div>
      </Container>
      <Podcast />
    </>
  )
}
