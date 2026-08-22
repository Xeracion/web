'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/cn'

import styles from './MobileMenu.module.css'

interface NavItem {
  key: string
  label: string
  href: string
}

interface MobileMenuProps {
  items: NavItem[]
  activeRoute?: string
}

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])'

export function MobileMenu({ items, activeRoute }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    focusable?.[0]?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const nodes = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (!nodes || nodes.length === 0) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      previouslyFocused.current?.focus()
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.iconLine} />
        <span className={styles.iconLine} />
        <span className={styles.iconLine} />
      </button>

      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!open}
        className={cn(styles.overlay, open && styles.open)}
      >
        <button type="button" className={styles.close} aria-label="Cerrar menú" onClick={() => setOpen(false)}>
          ✕
        </button>
        <nav aria-label="Navegación móvil">
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={cn(styles.link, activeRoute === item.key && styles.linkActive)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
