import type { Metadata } from 'next'
import { Suspense, type CSSProperties } from 'react'

import styles from '@/app/experiencias/page.module.css'
import { CatalogEmptyState } from '@/components/CatalogEmptyState'
import { Container } from '@/components/Container'
import { ExperienciasCatalog } from '@/components/ExperienciasCatalog'
import { WordReveal } from '@/components/WordReveal'
import { getExperiencias, localizeExperiencia } from '@/content/experiencias'
import { buildPageMetadata } from '@/lib/metadata'

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: 'Experiencias',
    description:
      'O catálogo de experiencias de Xeración: camiños, aventura, vivir fóra, intercambios, plans locais e natureza. Unhas págalas ti, outras están financiadas.',
    locale: 'gl_ES',
    path: '/gl/experiencias/',
  })
}

export default function ExperienciasGlPage() {
  const items = getExperiencias().map((item) => localizeExperiencia(item, 'gl'))

  return (
    <>
      <Container as="section" className={styles.header}>
        <h1>
          <WordReveal text="Todo o que podes facer, nun só sitio." />
        </h1>
        <p className={`${styles.subtitle} xr-hero-fade`} style={{ '--hero-delay': '420ms' } as CSSProperties}>
          Aventuras, camiños, encontros e plans de cada semana. Busca se xa sabes o que queres.
        </p>
      </Container>
      <Suspense fallback={null}>
        <ExperienciasCatalog
          items={items}
          persistInUrl
          showSearch
          locale="gl"
          emptyState={<CatalogEmptyState locale="gl" />}
        />
      </Suspense>
    </>
  )
}
