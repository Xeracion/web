export type Locale = 'es' | 'en'

export type RouteKey = 'home' | 'ferrol' | 'irse' | 'nosotros' | 'volunteering' | 'about'

export interface NavItem {
  name: string
  link: string
  key: RouteKey
}

export const NAV_ITEMS_ES: NavItem[] = [
  { name: 'Inicio', link: '/', key: 'home' },
  { name: 'Ferrol', link: '/ferrol/', key: 'ferrol' },
  { name: 'Irse', link: '/irse/', key: 'irse' },
  { name: 'Nosotros', link: '/nosotros/', key: 'nosotros' },
]

export const NAV_ITEMS_EN: NavItem[] = [
  { name: 'Home', link: '/en/', key: 'home' },
  { name: 'Ferrol', link: '/en/ferrol/', key: 'ferrol' },
  { name: 'Volunteering', link: '/volunteering/', key: 'volunteering' },
  { name: 'About Us', link: '/about/', key: 'about' },
]
