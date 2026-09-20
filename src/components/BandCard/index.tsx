import type { ReactNode } from 'react'

import { Card } from '@/components/Card'
import { EyebrowPill } from '@/components/EyebrowPill'

import styles from './BandCard.module.css'

interface BandCardProps {
  href: string
  external?: boolean
  bandColor: string
  bandLabel: string
  meta?: string
  title?: string
  text?: string
  reinforcement?: string
  priceLabel?: string
  priceTone?: 'positive' | 'neutral'
  ctaLabel?: string
  className?: string
}

export function BandCard({
  href,
  external = false,
  bandColor,
  bandLabel,
  meta,
  title,
  text,
  reinforcement,
  priceLabel,
  priceTone = 'neutral',
  ctaLabel,
  className,
}: BandCardProps) {
  return (
    <Card
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      <div className={styles.band} style={{ background: bandColor }}>
        <EyebrowPill>{bandLabel}</EyebrowPill>
      </div>
      <div className={styles.body}>
        {meta && <p className={styles.meta}>{meta}</p>}
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={styles.text}>{text}</p>}
        {reinforcement && <p className={styles.reinforcement}>{reinforcement}</p>}
        <div className={styles.footer}>
          {priceLabel ? (
            <span className={priceTone === 'positive' ? styles.pricePositive : styles.priceNeutral}>
              {priceLabel}
            </span>
          ) : (
            <span />
          )}
          {ctaLabel && (
            <span className={styles.cta}>
              {ctaLabel}
              {external ? <ExternalIcon /> : <span aria-hidden="true">→</span>}
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}

function ExternalIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={styles.externalIcon}
    >
      <path d="M6.5 3.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 3.5 6 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 3.5h-5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
