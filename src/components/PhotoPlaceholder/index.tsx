import Image from 'next/image'
import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

import styles from './PhotoPlaceholder.module.css'

export type PhotoPlaceholderVariant = 'hero' | 'ferrol' | 'irse' | 'en' | 'neutral'

const ROUTE_CLASS: Partial<Record<PhotoPlaceholderVariant, string>> = {
  ferrol: 'route-ferrol',
  irse: 'route-irse',
  en: 'route-en',
}

interface PhotoPlaceholderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: PhotoPlaceholderVariant
  label: string
  // Ruta estática de /public (contenido en src/content/). Sin ella, se
  // muestra el gradiente + etiqueta entre corchetes de siempre.
  image?: string
  alt?: string
  aspectRatio?: string
  radius?: 'lg' | 'xl'
  sizes?: string
  /** Calidad de compresión de next/image (75 por defecto; 90 en cabeceras). */
  quality?: number
}

export function PhotoPlaceholder({
  variant = 'neutral',
  label,
  image,
  alt,
  aspectRatio = '4 / 3',
  radius = 'lg',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  quality,
  className,
  style,
  ...rest
}: PhotoPlaceholderProps) {
  const variantModifier =
    variant === 'hero' || variant === 'neutral' ? styles[variant] : undefined
  const src = image || undefined

  return (
    <div
      className={cn(
        styles.wrapper,
        variantModifier,
        radius === 'xl' && styles.radiusXl,
        ROUTE_CLASS[variant],
        className,
      )}
      style={{ aspectRatio, ...style }}
      role={src ? undefined : 'img'}
      aria-label={src ? undefined : (alt ?? label)}
      {...rest}
    >
      {src ? (
        <Image src={src} alt={alt ?? label} fill sizes={sizes} quality={quality} className={styles.image} />
      ) : (
        <span className={styles.label} aria-hidden="true">
          [ {label} ]
        </span>
      )}
    </div>
  )
}
