'use client'

import { useEffect, useRef } from 'react'

import { LogoMark } from '@/components/LogoMark'

import styles from './Footer.module.css'

// La X del pie en móvil. Al subir, se desvanece a medida que se acerca a la
// cabecera, para que no se vean dos X a la vez: justo cuando llega, la X
// blanca de la cabecera toma su relevo.
const FADE_START = 150 // px del borde superior de la pantalla donde empieza a desvanecerse
const FADE_END = 72 // y donde ya es invisible (justo bajo la cabecera)

export function FooterMark() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const top = el.getBoundingClientRect().top
      const progress = (top - FADE_END) / (FADE_START - FADE_END)
      el.style.opacity = String(Math.min(1, Math.max(0, progress)))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <span ref={ref} className={styles.brandMark}>
      <LogoMark collapsed />
    </span>
  )
}
