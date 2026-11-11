'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState, type ReactNode } from 'react'

import { Container } from '@/components/Container'
import { ExperienciaCard } from '@/components/ExperienciaCard'
import type { ExperienciaData } from '@/content/experiencias'
import type { SectionIntro } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

import styles from './ExperienciasCatalog.module.css'

// Por debajo de este número de experiencias activas no se enseñan los chips
// de filtro: con pocas tarjetas, un chip que devuelve una sola (o ninguna) se
// lee peor que no filtrar. Todas van juntas en una sola rejilla, sin separar
// las de Ferrol de las demás. Cuando el catálogo crezca por encima del
// umbral, vuelven los chips solos, sin tocar este componente.
const FILTERS_THRESHOLD = 12

type ChipKey = 'todas' | 'galicia' | 'europa' | 'finde' | 'semana' | 'meses' | 'gratis'

const CHIP_KEYS: ChipKey[] = ['todas', 'galicia', 'europa', 'finde', 'semana', 'meses', 'gratis']

const COPY = {
  es: {
    chips: {
      todas: 'Todas',
      galicia: 'En Galicia',
      europa: 'Por Europa',
      finde: 'Un finde',
      semana: 'Una semana',
      meses: 'Meses',
      gratis: 'Sin coste',
    } satisfies Record<ChipKey, string>,
    empty: 'No hay experiencias con este filtro todavía.',
    searchPlaceholder: 'Busca por nombre...',
    searchLabel: 'Buscar experiencias',
    filterLabel: 'Filtrar experiencias',
  },
  gl: {
    chips: {
      todas: 'Todas',
      galicia: 'En Galicia',
      europa: 'Por Europa',
      finde: 'Unha fin de semana',
      semana: 'Unha semana',
      meses: 'Meses',
      gratis: 'Sen custo',
    } satisfies Record<ChipKey, string>,
    empty: 'Aínda non hai experiencias con este filtro.',
    searchPlaceholder: 'Busca polo nome...',
    searchLabel: 'Buscar experiencias',
    filterLabel: 'Filtrar experiencias',
  },
}

function matchesChip(item: ExperienciaData, chip: ChipKey) {
  switch (chip) {
    case 'todas':
      return true
    case 'galicia':
    case 'europa':
      return item.ambito === chip
    case 'finde':
    case 'semana':
    case 'meses':
      return item.duracion === chip
    case 'gratis':
      return item.costeTipo === 'gratis'
    default:
      return true
  }
}

function matchesQuery(item: ExperienciaData, q: string) {
  if (!q) return true
  return (item.titulo ?? '').toLowerCase().includes(q) || (item.resumen ?? '').toLowerCase().includes(q)
}

interface ExperienciasCatalogProps {
  items: ExperienciaData[]
  intro?: SectionIntro
  id?: string
  persistInUrl?: boolean
  showSearch?: boolean
  emptyMessage?: string
  /** Oculta los chips de filtro aunque haya más experiencias que FILTERS_THRESHOLD (la portada nunca los lleva). */
  hideFilters?: boolean
  /** Qué mostrar si no hay ninguna experiencia publicada. Sin él, la sección no se pinta. */
  emptyState?: ReactNode
  /** Contenido bajo las tarjetas (ej. el enlace a todo el catálogo). Solo se pinta si hay experiencias. */
  footer?: ReactNode
  locale?: Locale
}

export function ExperienciasCatalog({
  items,
  intro,
  id,
  persistInUrl = false,
  showSearch = false,
  emptyMessage: emptyMessageProp,
  hideFilters = false,
  emptyState,
  footer,
  locale = 'es',
}: ExperienciasCatalogProps) {
  const copy = COPY[locale]
  const emptyMessage = emptyMessageProp ?? copy.empty
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const simple = hideFilters || items.length <= FILTERS_THRESHOLD

  const urlChip = searchParams.get('filtro')
  const urlQuery = searchParams.get('q')

  const [chip, setChip] = useState<ChipKey>(() => {
    if (!persistInUrl) return 'todas'
    return CHIP_KEYS.some((key) => key === urlChip) ? (urlChip as ChipKey) : 'todas'
  })
  const [query, setQuery] = useState(() => (persistInUrl ? (urlQuery ?? '') : ''))

  useEffect(() => {
    if (!persistInUrl) return
    const params = new URLSearchParams()
    if (!simple && chip !== 'todas') params.set('filtro', chip)
    if (query.trim()) params.set('q', query.trim())
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chip, query, persistInUrl, simple])

  const searched = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => matchesQuery(item, q))
  }, [items, query])

  const filtered = useMemo(
    () => (simple ? searched : searched.filter((item) => matchesChip(item, chip))),
    [searched, simple, chip],
  )


  if (items.length === 0) {
    if (!emptyState) return null
    return (
      <Container as="section" id={id} className={styles.section}>
        {intro?.heading && (
          <div className={styles.intro}>
            <h2>{intro.heading}</h2>
          {intro.text && <p className={styles.introText}>{intro.text}</p>}
          </div>
        )}
        {emptyState}
      </Container>
    )
  }

  return (
    <Container as="section" id={id} className={styles.section}>
      {intro?.heading && (
        <div className={styles.intro}>
          <h2>{intro.heading}</h2>
          {intro.text && <p className={styles.introText}>{intro.text}</p>}
        </div>
      )}

      {showSearch && (
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.searchPlaceholder}
          className={styles.search}
          aria-label={copy.searchLabel}
        />
      )}

      {!simple && (
        <div className={styles.chips} role="group" aria-label={copy.filterLabel}>
          {CHIP_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setChip(key)}
              className={cn(styles.chip, chip === key && styles.chipActive)}
              aria-pressed={chip === key}
            >
              {copy.chips[key]}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className={styles.empty}>{emptyMessage}</p>
      ) : (
        <div className={styles.grid} data-reveal-stagger>
          {filtered.map((item) => (
            <ExperienciaCard key={item.slug ?? item.titulo} item={item} locale={locale} />
          ))}
        </div>
      )}

      {footer && <div className={styles.footer}>{footer}</div>}
    </Container>
  )
}
