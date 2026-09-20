export type Locale = 'es' | 'en'

export type RouteKey = 'home' | 'ferrol' | 'experiencias' | 'nosotros' | 'volunteering' | 'about'

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

export const NAV_ITEMS_EN: NavItem[] = [
  { name: 'Home', link: '/en/', key: 'home' },
  { name: 'Schedule', link: '/en/agenda/', key: 'ferrol' },
  { name: 'Volunteering', link: '/volunteering/', key: 'volunteering' },
  { name: 'About Us', link: '/about/', key: 'about' },
]
