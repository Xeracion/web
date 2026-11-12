import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import type { SectionIntro, TeamMember } from '@/content/types'

import styles from './Equipo.module.css'

interface EquipoData {
  equipoIntro?: SectionIntro
  teamMembers?: TeamMember[]
}

const MORE_LABEL = { es: 'Quiero conocer al equipo', gl: 'Quero coñecer o equipo' }
const HREF = { es: '/nosotros/equipo/', gl: '/nosotros/equipo/' }

// La sección es un único enlace hacia la página del equipo: titular, las
// caras de quienes están ahora mismo y una flecha. Las fotos son decorativas
// (los nombres están en la página de destino).
export function Equipo({ data, locale = 'es' }: { data: EquipoData; locale?: 'es' | 'gl' }) {
  const members = data.teamMembers ?? []
  if (members.length === 0) return null

  return (
    <Container as="section" className={styles.section}>
      <Link href={HREF[locale]} className={styles.card}>
        <div className={styles.text}>
          <h2>{data.equipoIntro?.heading}</h2>
          <span className={styles.cta}>{MORE_LABEL[locale]}</span>
        </div>
        <ul className={styles.faces} aria-hidden="true">
          {members.map((member, i) => (
            <li key={i} className={styles.face}>
              <Image src={member.image ?? ''} alt="" width={96} height={96} />
            </li>
          ))}
        </ul>
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      </Link>
    </Container>
  )
}
