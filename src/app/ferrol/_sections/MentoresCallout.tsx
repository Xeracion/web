import { ButtonLink } from '@/components/ButtonLink'
import { Container } from '@/components/Container'

import styles from './MentoresCallout.module.css'

export function MentoresCallout() {
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.banner}>
        <div>
          <h3>¿Vives en Ferrol y hablas algo de inglés?</h3>
          <p className={styles.text}>
            Acompaña a los voluntarios que llegan de fuera a integrarse en la ciudad.
          </p>
        </div>
        <ButtonLink accent href="/mentores/">
          Hazte mentor
        </ButtonLink>
      </div>
    </Container>
  )
}
