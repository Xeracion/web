'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

import styles from './HeroSplit.module.css'

// Foto de cabecera que se abre hacia los márgenes al hacer scroll (como el
// vídeo de la portada de anthropic.com). La caja ocupa todo el ancho de la
// retícula y un clip-path la recorta al ancho del contenido; al bajar, el
// recorte se va abriendo hasta los bordes. Sin JS o con
// prefers-reduced-motion se queda al ancho del contenido.
export function HeroPhotoBleed({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const root = document.documentElement
    // Ancho real sin la barra de scroll (100vw la incluye en Windows).
    const setWidth = () => el.style.setProperty('--vw', `${root.clientWidth}px`)
    setWidth()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('resize', setWidth)
      return () => window.removeEventListener('resize', setWidth)
    }

    let frame = 0
    const update = () => {
      frame = 0
      const navHeight = parseFloat(getComputedStyle(root).getPropertyValue('--nav-height')) || 72
      const top = el.getBoundingClientRect().top + window.scrollY
      // Termina de abrirse cuando la foto llega bajo el menú.
      const distance = Math.max(240, top - navHeight)
      const progress = Math.min(1, Math.max(0, window.scrollY / distance))
      el.style.setProperty('--expand', progress.toFixed(4))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const onResize = () => {
      setWidth()
      schedule()
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={ref} className={styles.bleed} style={style}>
      {children}
    </div>
  )
}
