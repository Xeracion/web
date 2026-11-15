import Image from 'next/image'
import Link from 'next/link'

import type { Historia } from '@/content/historias'

import styles from './HistoriaCard.module.css'

interface HistoriaCardProps {
  historia: Historia
}

/** Tarjeta de una historia de voluntariado (sección «Testimonios» de /nosotros/). */
export function HistoriaCard({ historia }: HistoriaCardProps) {
  const meta = [historia.country, historia.anio].filter(Boolean).join(' · ')
  return (
    <Link href={`/${historia.slug}/`} className={styles.card}>
      <div className={styles.photo}>
        {historia.image ? (
          <Image src={historia.image} alt={historia.imageAlt ?? ''} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
        ) : (
          <span className={styles.initial} aria-hidden="true">
            {historia.name.charAt(0)}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {historia.name}
          {meta ? ` · ${meta}` : ''}
        </p>
        <h3 className={styles.title} lang={historia.lang}>
          {historia.titulo}
        </h3>
        <p className={styles.text}>{historia.lead}</p>
        <span className={styles.cta}>
          Leer su historia <span className="xr-arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
