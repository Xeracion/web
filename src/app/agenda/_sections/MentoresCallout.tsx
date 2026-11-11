import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'

import styles from './MentoresCallout.module.css'

// /mentores/ solo existe en castellano: desde el gallego se enlaza igual.
const COPY = {
  es: {
    heading: '¿Vives en Ferrol y hablas algo de inglés?',
    text: 'Acompaña a los voluntarios que llegan de fuera a integrarse en la ciudad.',
    cta: 'Quiero ser mentor',
  },
  gl: {
    heading: 'Vives en Ferrol e falas algo de inglés?',
    text: 'Acompaña os voluntarios que chegan de fóra a integrarse na cidade.',
    cta: 'Quero ser mentor',
  },
}

export function MentoresCallout({ locale = 'es' }: { locale?: 'es' | 'gl' }) {
  const copy = COPY[locale]
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.banner}>
        <div>
          <h3>{copy.heading}</h3>
          <p className={styles.text}>{copy.text}</p>
        </div>
        <ButtonLink accent href="/mentores/">
          {copy.cta}
        </ButtonLink>
      </div>
    </Container>
  )
}
