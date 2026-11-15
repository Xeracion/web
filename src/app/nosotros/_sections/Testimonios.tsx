import { Container } from '@/components/Container'
import { HistoriaCard } from '@/components/HistoriaCard'
import { historiasEs, testimoniosIntroEs } from '@/content/historias'

import styles from './Testimonios.module.css'

/** Historias de voluntariado del blog anterior; cada tarjeta lleva a su URL de siempre. */
export function Testimonios() {
  return (
    <Container as="section" id="testimonios" className={styles.section} aria-labelledby="testimonios-titulo">
      <div className={styles.head}>
        <h2 id="testimonios-titulo">{testimoniosIntroEs.heading}</h2>
        <p className={styles.text}>{testimoniosIntroEs.text}</p>
      </div>
      <ul className={styles.grid}>
        {historiasEs.map((historia) => (
          <li key={historia.slug}>
            <HistoriaCard historia={historia} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
