'use client'

import { useEffect } from 'react'

const HIDDEN_CLASS = 'js-reveal-hidden'

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const sections = document.querySelectorAll<HTMLElement>('main section')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.remove(HIDDEN_CLASS)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (alreadyVisible) continue

      section.classList.add(HIDDEN_CLASS)
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
