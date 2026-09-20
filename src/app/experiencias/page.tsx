import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { buildPageMetadata } from '@/lib/metadata'
import { getExperiencias } from '@/sanity/lib/queries'

import styles from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: 'Experiencias',
    description:
      'El catálogo de experiencias de Xeración: caminos, aventura, vivir fuera, intercambios, planes locales y naturaleza. Unas las pagas tú, otras te las paga Europa.',
  })
}

export default async function ExperienciasPage() {
  const items = await getExperiencias()

  return (
    <>
      <Container as="section" className={styles.header}>
        <Eyebrow accent>Catálogo completo</Eyebrow>
        <h1>Todo lo que puedes hacer, en un solo sitio.</h1>
        <p className={styles.subtitle}>
          Desde clubs semanales en Ferrol hasta voluntariados por Europa. Busca si ya sabes lo que quieres.
        </p>
      </Container>
      <Suspense fallback={null}>
        <ExperienciasCatalog items={items} persistInUrl showSearch />
      </Suspense>
    </>
  )
}
