import type { Metadata } from 'next'
import { Suspense, type CSSProperties } from 'react'

import { CatalogEmptyState } from '@/components/CatalogEmptyState'
import { Container } from '@/components/Container'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { WordReveal } from '@/components/WordReveal'
import { buildPageMetadata } from '@/lib/metadata'
import { getExperiencias } from '@/content/experiencias'

import styles from './page.module.css'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: 'Experiencias',
    description:
      'El catálogo de experiencias de Xeración: caminos, aventura, vivir fuera, intercambios, planes locales y naturaleza. Unas las pagas tú, otras están financiadas.',
    path: '/experiencias/',
  })
}

export default function ExperienciasPage() {
  const items = getExperiencias()

  return (
    <>
      <Container as="section" className={styles.header}>
        <h1>
          <WordReveal text="Todo lo que puedes hacer, en un solo sitio." />
        </h1>
        <p className={`${styles.subtitle} xr-hero-fade`} style={{ '--hero-delay': '420ms' } as CSSProperties}>
          Aventuras, caminos, encuentros y planes de cada semana. Busca si ya sabes lo que quieres.
        </p>
      </Container>
      <Suspense fallback={null}>
        <ExperienciasCatalog items={items} persistInUrl showSearch emptyState={<CatalogEmptyState />} />
      </Suspense>
    </>
  )
}
