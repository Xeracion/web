'use client'

import { useIsPresentationTool } from 'next-sanity/hooks'

import styles from './DisableDraftMode.module.css'

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool()
  if (isPresentationTool) return null

  return (
    <a href="/api/draft-mode/disable" className={styles.link}>
      Salir del modo borrador
    </a>
  )
}
