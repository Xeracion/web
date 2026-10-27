import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Prose } from '@/components/Prose'
import { pagePaisanosEs, paisanosEs } from '@/content/paisanos'
import type { Paisano } from '@/content/types'
import { cn } from '@/lib/cn'
import { buildPageMetadata } from '@/lib/metadata'

import { PaisanoCard } from '../_components/PaisanoCard'
import { Podcast } from '../_components/Podcast'
import styles from './page.module.css'

const PULL_QUOTE_AFTER = 3

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return paisanosEs.map((paisano) => ({ slug: paisano.slug }))
}

function findPaisano(slug: string): Paisano | undefined {
  return paisanosEs.find((paisano) => paisano.slug === slug)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const paisano = findPaisano((await params).slug)
  if (!paisano) return {}
  return buildPageMetadata({ title: `La historia de ${paisano.name}`, description: paisano.summary })
}

function moreStories(slug: string): Paisano[] {
  const index = paisanosEs.findIndex((paisano) => paisano.slug === slug)
  return [1, 2, 3].map((offset) => paisanosEs[(index + offset) % paisanosEs.length])
}

export default async function PaisanoPage({ params }: PageProps) {
  const paisano = findPaisano((await params).slug)
  if (!paisano) notFound()

  const page = pagePaisanosEs
  const paragraphsSeen = { count: 0 }
  const body: ReactNode[] = []

  paisano.body.forEach((block, i) => {
    if (block.type === 'heading') {
      body.push(
        <h2 key={i} className={styles.heading}>
          {block.text}
        </h2>,
      )
      return
    }
    body.push(<Prose key={i} value={block.text} className={styles.paragraph} />)
    paragraphsSeen.count += 1
    if (paisano.pullQuote && paragraphsSeen.count === PULL_QUOTE_AFTER) {
      body.push(
        <figure key="pull" className={styles.pull}>
          <blockquote className={styles.pullQuote}>{paisano.pullQuote}</blockquote>
          <figcaption className={styles.pullName}>{paisano.name}</figcaption>
        </figure>,
      )
    }
  })

  return (
    <article>
      <Container className={styles.header}>
        <div className={styles.column}>
          <Link href="/paisanos/" className={styles.back}>
            <span aria-hidden="true">←</span> {page.backLabel}
          </Link>
          <Eyebrow accent>Paisanos</Eyebrow>
          <h1>La historia de {paisano.name}.</h1>
          <p className={styles.lead}>{paisano.lead}</p>
        </div>
      </Container>

      <Container>
        <div className={styles.photo}>
          <Image
            src={paisano.image}
            alt={paisano.imageAlt}
            fill
            priority
            sizes="(min-width: 1200px) 1136px, 100vw"
            style={{ objectPosition: paisano.imageFocus }}
          />
        </div>
      </Container>

      <Container>
        <div className={cn(styles.column, styles.body)}>{body}</div>
      </Container>

      <Container as="section" className={styles.more}>
        <h2>{page.moreHeading}</h2>
        <div className={styles.moreGrid}>
          {moreStories(paisano.slug).map((other) => (
            <PaisanoCard key={other.slug} paisano={other} />
          ))}
        </div>
      </Container>

      <Podcast />
    </article>
  )
}
