'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

import styles from './VoluntariosHistoricos.module.css'

interface ReviewsCarouselProps {
  label: string
  prevLabel: string
  nextLabel: string
  children: ReactNode
}

// Carrusel horizontal con flechas a los lados. Sin JS sigue pudiéndose
// deslizar con el dedo o el ratón; las flechas se desactivan en los extremos.
export function ReviewsCarousel({ label, prevLabel, nextLabel, children }: ReviewsCarouselProps) {
  const track = useRef<HTMLUListElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 })
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const move = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 280), behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel}>
      <button type="button" className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => move(-1)} disabled={edge.start} aria-label={prevLabel}>
        <span aria-hidden="true">←</span>
      </button>
      <ul className={styles.track} ref={track} onScroll={update} tabIndex={0} aria-label={label}>
        {children}
      </ul>
      <button type="button" className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => move(1)} disabled={edge.end} aria-label={nextLabel}>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
