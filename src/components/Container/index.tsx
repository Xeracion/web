import type { ElementType, HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

import styles from './Container.module.css'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: ReactNode
}

export function Container({
  as: Tag = 'div',
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag className={cn(styles.container, className)} {...rest}>
      {children}
    </Tag>
  )
}
