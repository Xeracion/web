import Image from 'next/image'
import Link from 'next/link'

import { getProyectoHref, type ProyectoData } from '@/content/proyectos'

import styles from './ProyectoCard.module.css'

interface ProyectoCardProps {
  proyecto: ProyectoData
}

export function ProyectoCard({ proyecto }: ProyectoCardProps) {
  return (
    <Link href={getProyectoHref(proyecto)} className={styles.card}>
      <div className={styles.photo}>
        {proyecto.imagen ? (
          <Image src={proyecto.imagen} alt={proyecto.imagenAlt ?? ''} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
        ) : null}
        <span className={styles.label}>{proyecto.formato}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          {proyecto.anio} · {proyecto.lugar}
        </p>
        <h3 className={styles.title}>{proyecto.titulo}</h3>
        <p className={styles.text}>{proyecto.resumen}</p>
        <span className={styles.cta}>
          Ver la ficha <span className="xr-arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
