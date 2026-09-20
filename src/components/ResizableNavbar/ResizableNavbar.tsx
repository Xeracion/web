'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'

import { cn } from '@/lib/cn'
import type { NavItem, RouteKey } from '@/lib/nav'

import styles from './ResizableNavbar.module.css'

const SCROLL_THRESHOLD = 100
const SPRING = { type: 'spring' as const, stiffness: 260, damping: 32 }
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
  const [hovered, setHovered] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > SCROLL_THRESHOLD)
  })

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

  const transition = prefersReducedMotion ? INSTANT : SPRING
  const copy = NAV_COPY

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={cn(styles.inner, scrolled && styles.innerScrolled)}
        animate={{
          maxWidth: scrolled ? 720 : 1200,
          marginTop: scrolled ? 12 : 0,
          borderRadius: scrolled ? 999 : 0,
          boxShadow: scrolled
            ? '0 12px 32px -16px rgba(44,44,42,0.25), inset 0 1px 0 rgba(255,255,255,0.6)'
            : '0 0 0 0 rgba(44,44,42,0), inset 0 0 0 0 rgba(255,255,255,0)',
        }}
        transition={transition}
      >
        <div className={cn(styles.bar, scrolled && styles.barScrolled)}>
          <Link href="/" className={styles.logo} aria-label={siteName}>
            <Image src="/XeracionBlue.png" alt="" width={1811} height={375} priority />
          </Link>

          <nav className={styles.desktopNav} aria-label={copy.primaryNav}>
            <ul className={styles.navList} onMouseLeave={() => setHovered(null)}>
              {items.map((item, i) => {
                const isActive = activeRoute === item.key

                return (
                  <li
                    key={item.link}
                    className={styles.navItem}
                    onMouseEnter={() => setHovered(i)}
                  >
                    {hovered === i && !prefersReducedMotion && (
                      <motion.div
                        layoutId="nav-pill"
                        className={styles.pill}
                        transition={SPRING}
                      />
                    )}
                    <Link
                      href={item.link}
                      className={cn(styles.navLink, isActive && styles.navLinkActive)}
                      aria-current={isActive ? 'page' : undefined}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className={styles.mobileToggle}
            aria-expanded={mobileOpen}
            aria-controls="resizable-navbar-mobile-menu"
            aria-label={mobileOpen ? copy.close : copy.open}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <motion.span
              className={styles.toggleLine}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }
              }
              transition={transition}
            />
            <motion.span
              className={styles.toggleLine}
              animate={prefersReducedMotion ? undefined : { opacity: mobileOpen ? 0 : 1 }}
              transition={transition}
            />
            <motion.span
              className={styles.toggleLine}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }
              }
              transition={transition}
            />
          </button>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="resizable-navbar-mobile-menu"
            className={styles.mobileMenu}
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0, y: -8 }}
            transition={transition}
          >
            <nav aria-label={copy.mobileNav}>
              <ul className={styles.mobileList}>
                {items.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
