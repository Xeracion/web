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
