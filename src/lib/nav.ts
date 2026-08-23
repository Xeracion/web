export type RouteKey = 'ferrol' | 'irse' | 'en'

export interface NavItem {
  name: string
  link: string
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Ferrol', link: '/ferrol/' },
  { name: 'Irse', link: '/irse/' },
  { name: 'English', link: '/en/' },
]

export const NAV_SECONDARY_ITEM: NavItem = { name: 'Sobre nós', link: '/nosotros/' }
