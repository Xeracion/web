'use client'

import type { ElementType } from 'react'
import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: string
  className?: string
  duration?: number
  as?: ElementType
}

const NUMBER_PATTERN = /^(\D*)(\d+)(\D*)$/

export function AnimatedNumber({ value, className, duration = 1200, as: Tag = 'p' }: AnimatedNumberProps) {
  const ref = useRef<HTMLElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const match = value.match(NUMBER_PATTERN)
    const node = ref.current
    if (!match || !node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const [, prefix, digits, suffix] = match
    const target = Number(digits)

    const rect = node.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
    if (alreadyVisible) return

    // El valor real se pinta siempre (SSR, sin JS, buscadores, capturas): el
    // contador solo arranca desde 0 en el momento en que entra en pantalla.
    // Antes se ponía a 0 nada más cargar y, si el observer no llegaba a
    // dispararse, la página se quedaba enseñando «0 voluntarios».
    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(node)

          const start = performance.now()
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`)
            if (progress < 1) frame = requestAnimationFrame(tick)
          }
          frame = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      setDisplay(value)
    }
  }, [value, duration])

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  )
}
