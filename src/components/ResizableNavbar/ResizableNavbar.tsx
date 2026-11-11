'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'

import { cn } from '@/lib/cn'
import type { NavItem, RouteKey } from '@/lib/nav'

import styles from './ResizableNavbar.module.css'

// Barra fija sencilla (inspirada en anthropic.com): enlaces en pastillas
// finas, la primera mitad a la izquierda, el logo centrado y la segunda
// mitad a la derecha. No se encoge ni flota: al hacer scroll solo gana una
// línea fina inferior. En móvil, logo a la izquierda y hamburguesa.
const TRANSITION = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }
const INSTANT = { duration: 0 }

const NAV_COPY = {
  primaryNav: 'Navegación principal',
  mobileNav: 'Navegación móvil',
  open: 'Abrir menú',
  close: 'Cerrar menú',
}

interface ResizableNavbarProps {
  siteName: string
  items: NavItem[]
  activeRoute?: RouteKey
}

export function ResizableNavbar({ siteName, items, activeRoute }: ResizableNavbarProps) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 8))

  useEffect(() => {
    if (!mobileOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const transition = prefersReducedMotion ? INSTANT : TRANSITION
  const half = Math.ceil(items.length / 2)
  const groups = [items.slice(0, half), items.slice(half)]

  function renderLinks(list: NavItem[]) {
    return list.map((item) => {
      const isActive = activeRoute === item.key
      return (
        <li key={item.link}>
          <Link
            href={item.link}
            className={cn(styles.chip, isActive && styles.chipActive)}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.name}
          </Link>
        </li>
      )
    })
  }

  return (
    <header className={cn(styles.wrapper, (scrolled || mobileOpen) && styles.wrapperScrolled)}>
      <div className={styles.bar}>
        <nav className={styles.desktopNav} aria-label={NAV_COPY.primaryNav}>
          <ul className={styles.list}>{renderLinks(groups[0])}</ul>
          <Link href="/" className={styles.logo} aria-label={siteName}>
            <Image src="/XeracionBlue.png" alt="" width={1811} height={375} priority />
          </Link>
          <ul className={cn(styles.list, styles.listEnd)}>{renderLinks(groups[1])}</ul>
        </nav>

        <Link href="/" className={cn(styles.logo, styles.logoMobile)} aria-label={siteName}>
          <Image src="/XeracionBlue.png" alt="" width={1811} height={375} priority />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.mobileToggle}
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-menu"
          aria-label={mobileOpen ? NAV_COPY.close : NAV_COPY.open}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className={cn(styles.toggleLine, mobileOpen && styles.toggleLineTop)} />
          <span className={cn(styles.toggleLine, mobileOpen && styles.toggleLineBottom)} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="site-mobile-menu"
            className={styles.mobileMenu}
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={transition}
          >
            <nav aria-label={NAV_COPY.mobileNav}>
              <ul className={styles.mobileList}>
                {items.map((item) => {
                  const isActive = activeRoute === item.key
                  return (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        className={cn(styles.mobileLink, isActive && styles.mobileLinkActive)}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
