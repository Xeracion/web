import type { ElementType, HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './Eyebrow.module.css'

interface EyebrowProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  accent?: boolean
  children: ReactNode
}

export function Eyebrow({
  as: Tag = 'p',
  accent = false,
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <Tag className={cn(styles.eyebrow, accent && styles.accent, className)} {...rest}>
      {children}
    </Tag>
  )
}
