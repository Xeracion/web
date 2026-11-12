'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const HIDDEN_CLASS = 'js-reveal-hidden'

// Entrada al hacer scroll (como anthropic.com): cada sección sube y aparece
// al entrar en pantalla, y dentro de ella las tarjetas de las rejillas
// marcadas con [data-reveal-stagger] entran una detrás de otra. Lo que ya
// está en pantalla al cargar no se toca, y sin JS o con
// prefers-reduced-motion todo se ve directamente.
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    for (const group of document.querySelectorAll<HTMLElement>('[data-reveal-stagger]')) {
      Array.from(group.children).forEach((child, i) => {
        if (!(child instanceof HTMLElement)) return
        child.dataset.revealChild = ''
        child.style.setProperty('--reveal-i', String(Math.min(i, 8)))
      })
    }

    // La banda verde de cierre y el pie no se animan: van pegados y, si
    // entraban con fundido, al bajar se veía un instante el fondo blanco
    // entre ellos.
    const sections = document.querySelectorAll<HTMLElement>('main section:not([data-closing-band])')
    if (sections.length === 0) return

    const onIntersect = (entries: IntersectionObserverEntry[], self: IntersectionObserver) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.remove(HIDDEN_CLASS)
        self.unobserve(entry.target)
      }
    }
    const options = { rootMargin: '0px 0px -10% 0px' }
    const observer = new IntersectionObserver(onIntersect, { ...options, threshold: 0.1 })
    // Una sección mucho más alta que la pantalla (la rejilla de personas de
    // /nosotros/equipo/) nunca llega a enseñar el 10 % de su alto en móvil y
    // se quedaba en blanco: esas aparecen en cuanto asoma su borde superior.
    const tallObserver = new IntersectionObserver(onIntersect, { ...options, threshold: 0 })

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (alreadyVisible) continue

      section.classList.add(HIDDEN_CLASS)
      const isTall = rect.height > window.innerHeight * 3
      ;(isTall ? tallObserver : observer).observe(section)
    }

    return () => {
      observer.disconnect()
      tallObserver.disconnect()
    }
  }, [pathname])

  return null
}
