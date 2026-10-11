import type { ElementType, HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './EyebrowPill.module.css'

interface EyebrowPillProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  accent?: boolean
  highlight?: boolean
  children: ReactNode
}

export function EyebrowPill({
  as: Tag = 'span',
  accent = false,
  highlight = false,
  className,
  children,
  ...rest
}: EyebrowPillProps) {
  return (
    <Tag
      className={cn(styles.pill, accent && styles.accent, highlight && styles.highlight, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
