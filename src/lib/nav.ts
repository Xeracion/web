import type { Locale } from './i18n'

export type RouteKey = 'home' | 'ferrol' | 'experiencias' | 'nosotros'

export interface NavItem {
  name: string
  link: string
  key: RouteKey
}

export const NAV_ITEMS_ES: NavItem[] = [
  { name: 'Inicio', link: '/', key: 'home' },
  { name: 'Agenda', link: '/agenda/', key: 'ferrol' },
  { name: 'Experiencias', link: '/experiencias/', key: 'experiencias' },
  { name: 'Nosotros', link: '/nosotros/', key: 'nosotros' },
]

export const NAV_ITEMS_GL: NavItem[] = [
  { name: 'Inicio', link: '/gl/', key: 'home' },
  { name: 'Axenda', link: '/gl/axenda/', key: 'ferrol' },
  { name: 'Experiencias', link: '/gl/experiencias/', key: 'experiencias' },
  { name: 'Nós', link: '/gl/nos/', key: 'nosotros' },
]

export const NAV_ITEMS: Record<Locale, NavItem[]> = {
  es: NAV_ITEMS_ES,
  gl: NAV_ITEMS_GL,
}
