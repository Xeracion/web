'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { LogoMark } from '@/components/LogoMark'

import styles from './Footer.module.css'

// Logo del pie: la X de la marca. Entra con el wordmark completo y, al llegar
// el pie a la pantalla, las letras se pliegan hacia la X, la misma animación
// que el logo de la cabecera (y que el de anthropic.com).
export function FooterLogo({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCollapsed(true)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link ref={ref} href={href} className={styles.brandLogo} aria-label={label}>
      <LogoMark collapsed={collapsed} className={styles.brandMark} />
    </Link>
  )
}
