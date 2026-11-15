import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { HistoriaCard } from '@/components/HistoriaCard'
import { Prose } from '@/components/Prose'
import { getHistoria, historiasEs, type Historia } from '@/content/historias'
import { cn } from '@/lib/cn'
import { buildPageMetadata } from '@/lib/metadata'

import styles from './page.module.css'

// Historias de voluntariado del blog anterior, en su URL de siempre
// (/una-turca-en-ferrol/…). Solo se generan las de src/content/historias.ts;
// cualquier otra ruta de un nivel sin página propia sigue dando 404.
interface PageProps {
  params: Promise<{ historia: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return historiasEs.map((historia) => ({ historia: historia.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const historia = getHistoria((await params).historia)
  if (!historia) return {}
  return buildPageMetadata({ title: historia.titulo, description: historia.lead })
}

function moreStories(slug: string): Historia[] {
  const index = historiasEs.findIndex((historia) => historia.slug === slug)
  return [1, 2, 3].map((offset) => historiasEs[(index + offset) % historiasEs.length])
}

export default async function HistoriaPage({ params }: PageProps) {
  const historia = getHistoria((await params).historia)
  if (!historia) notFound()

  return (
    <article>
      <Container className={styles.header}>
        <div className={styles.column}>
          <Link href="/nosotros/#testimonios" className={styles.back}>
            <span aria-hidden="true">←</span> Todos los testimonios
          </Link>
          <h1 lang={historia.lang}>{historia.titulo}.</h1>
          <p className={styles.lead}>{historia.lead}</p>
        </div>
      </Container>

      {historia.image ? (
        <Container>
          <div className={styles.photo}>
            <Image
              src={historia.image}
              alt={historia.imageAlt ?? ''}
              fill
              priority
              quality={90}
              sizes="(min-width: 1200px) 1136px, 100vw"
            />
          </div>
        </Container>
      ) : null}

      <Container>
        <div className={cn(styles.column, styles.body)} lang={historia.lang}>
          {historia.body.map((block, i) =>
            block.type === 'heading' ? (
              <h2 key={i} className={styles.heading}>
                {block.text}
              </h2>
            ) : (
              <Prose key={i} value={block.text} className={styles.paragraph} />
            ),
          )}
          <p className={styles.signature}>
            {historia.name}
            {historia.country ? ` · ${historia.country}` : ''} · {historia.anio}
          </p>
        </div>
      </Container>

      {historia.gallery?.length ? (
        <Container>
          <div className={styles.gallery}>
            {historia.gallery.map((photo) => (
              <div key={photo.src} className={styles.galleryPhoto}>
                <Image src={photo.src} alt={photo.alt} fill quality={90} sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            ))}
          </div>
        </Container>
      ) : null}

      <Container as="section" className={styles.more}>
        <h2>Más testimonios.</h2>
        <div className={styles.moreGrid}>
          {moreStories(historia.slug).map((other) => (
            <HistoriaCard key={other.slug} historia={other} />
          ))}
        </div>
      </Container>
    </article>
  )
}
