'use client'

import Link from 'next/link'
import { useState } from 'react'

import styles from './ConsentMap.module.css'

const COPY = {
  es: {
    show: 'Ver mapa',
    note: 'El mapa lo sirve Google: al cargarlo, Google puede guardar cookies en tu navegador.',
    open: 'Abrir en Google Maps',
    policy: 'Política de cookies',
  },
  gl: {
    show: 'Ver mapa',
    note: 'O mapa sérveo Google: ao cargalo, Google pode gardar cookies no teu navegador.',
    open: 'Abrir en Google Maps',
    policy: 'Política de cookies',
  },
}

interface ConsentMapProps {
  /** URL de inserción de Google Maps (output=embed). */
  embedUrl: string
  title: string
  locale?: 'es' | 'gl'
}

// El mapa de Google pone cookies de terceros en cuanto se carga. Para que la
// web no use cookies (y no necesite banner), el iframe solo se pinta cuando
// la persona lo pide. Ver /cookies/.
export function ConsentMap({ embedUrl, title, locale = 'es' }: ConsentMapProps) {
  const [visible, setVisible] = useState(false)
  const copy = COPY[locale]
  const externalUrl = embedUrl.replace('&output=embed', '')

  if (visible) {
    return (
      <div className={styles.map}>
        <iframe src={embedUrl} title={title} referrerPolicy="no-referrer-when-downgrade" />
      </div>
    )
  }

  return (
    <div className={styles.placeholder}>
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true" className={styles.pin}>
        <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
      <button type="button" className={styles.button} onClick={() => setVisible(true)}>
        {copy.show}
      </button>
      <p className={styles.note}>
        {copy.note} <Link href="/cookies/">{copy.policy}</Link>
      </p>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className={styles.external}>
        {copy.open} <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}
