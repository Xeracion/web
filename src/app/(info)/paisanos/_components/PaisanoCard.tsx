import Image from 'next/image'
import Link from 'next/link'

import type { Paisano } from '@/content/types'

import styles from './PaisanoCard.module.css'

export function PaisanoCard({ paisano }: { paisano: Paisano }) {
  return (
    <Link href={`/paisanos/${paisano.slug}/`} className={styles.card}>
      <div className={styles.photo}>
        <Image
          src={paisano.image}
          alt={paisano.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          style={{ objectPosition: paisano.imageFocus }}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{paisano.name}</h3>
        <p className={styles.summary}>{paisano.summary}</p>
        <span className={styles.cta}>
          Leer su historia <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
