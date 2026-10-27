import type { Metadata } from 'next'

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

  return (
    <>
      <PageHeader heading={page.heading} text={page.intro} />
      <Container as="section" className={styles.stories}>
        <h2>{page.storiesIntro.heading}</h2>
        <div className={styles.grid}>
          {paisanosEs.map((paisano) => (
            <PaisanoCard key={paisano.slug} paisano={paisano} />
          ))}
        </div>
      </Container>
      <Podcast />
    </>
  )
}
