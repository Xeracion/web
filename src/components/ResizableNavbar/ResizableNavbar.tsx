'use client'

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

interface ResizableNavbarProps {
  siteName: string
  items: NavItem[]
  secondaryItem?: NavItem
  activeRoute?: RouteKey
}

export function ResizableNavbar({ siteName, items, secondaryItem, activeRoute }: ResizableNavbarProps) {
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

  const allItems = secondaryItem ? [...items, secondaryItem] : items
  const transition = prefersReducedMotion ? INSTANT : SPRING

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.inner}
        animate={{
          maxWidth: scrolled ? 720 : 1200,
          marginTop: scrolled ? 12 : 0,
          borderRadius: scrolled ? 999 : 0,
          boxShadow: scrolled ? '0 12px 32px -16px rgba(44,44,42,0.25)' : '0 0 0 0 rgba(44,44,42,0)',
        }}
        transition={transition}
      >
        <div className={cn(styles.bar, scrolled && styles.barScrolled)}>
          <Link href="/" className={styles.logo}>
            {siteName}
          </Link>

          <nav className={styles.desktopNav} aria-label="Navegación principal">
            <ul className={styles.navList} onMouseLeave={() => setHovered(null)}>
              {items.map((item, i) => {
                const isActive =
                  activeRoute && item.link === `/${activeRoute}/`

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
            {secondaryItem && (
              <>
                <span className={styles.divider} aria-hidden="true" />
                <Link href={secondaryItem.link} className={styles.aboutLink}>
                  {secondaryItem.name}
                </Link>
              </>
            )}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className={styles.mobileToggle}
            aria-expanded={mobileOpen}
            aria-controls="resizable-navbar-mobile-menu"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
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

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              id="resizable-navbar-mobile-menu"
              className={styles.mobileMenu}
              initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
              transition={transition}
            >
              <nav aria-label="Navegación móvil">
                <ul className={styles.mobileList}>
                  {allItems.map((item) => (
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
      </motion.div>
    </div>
  )
}
