import type { Metadata } from 'next'

import { ButtonLink } from '@/components/ButtonLink'
import { ButtonPrimary } from '@/components/ButtonPrimary'
import { Container } from '@/components/Container'
import { SiteShell } from '@/components/SiteShell'

import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <SiteShell>
      <Container as="section" className={styles.section} aria-labelledby="nf-title">
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <div className={styles.content}>
          <h1 id="nf-title">Esta página se ha perdido por el camino.</h1>
          <p className={styles.text}>
            Puede que el enlace esté roto o que la hayamos movido de sitio. Desde aquí te
            llevamos a lo que seguro que está.
          </p>
          <div className={styles.actions}>
            <ButtonPrimary href="/">Llévame al inicio</ButtonPrimary>
            <ButtonLink href="/experiencias/">Quiero ver las experiencias</ButtonLink>
            <ButtonLink href="/agenda/">Quiero ver la agenda</ButtonLink>
          </div>
          <p className={styles.help}>
            ¿Esperabas encontrar algo concreto? Escríbenos a{' '}
            <a href="mailto:info@xeracion.org">info@xeracion.org</a> y te ayudamos.
          </p>
        </div>
      </Container>
    </SiteShell>
  )
}
