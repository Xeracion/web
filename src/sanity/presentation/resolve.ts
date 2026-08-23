import { defineLocations } from 'sanity/presentation'
import type { PresentationPluginOptions } from 'sanity/presentation'

export const presentationResolve: PresentationPluginOptions['resolve'] = {
  locations: {
    home: defineLocations({
      select: { heading: 'heading' },
      resolve: (doc) => ({
        locations: [{ title: doc?.heading || 'Home', href: '/' }],
      }),
    }),
    siteSettings: defineLocations({
      select: { title: 'title' },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || 'Ajustes generales', href: '/' }],
      }),
    }),
    pageFerrol: defineLocations({
      select: { heroHeading: 'heroHeading' },
      resolve: (doc) => ({
        locations: [{ title: doc?.heroHeading || 'Página Ferrol', href: '/ferrol/' }],
      }),
    }),
    pageIrse: defineLocations({
      select: { heroHeading: 'heroHeading' },
      resolve: (doc) => ({
        locations: [{ title: doc?.heroHeading || 'Página Irse', href: '/irse/' }],
      }),
    }),
    pageEn: defineLocations({
      select: { heroHeading: 'heroHeading' },
      resolve: (doc) => ({
        locations: [{ title: doc?.heroHeading || 'Página English', href: '/en/' }],
      }),
    }),
    pageNosotros: defineLocations({
      select: { heroHeading: 'heroHeading' },
      resolve: (doc) => ({
        locations: [{ title: doc?.heroHeading || 'Página Sobre nós', href: '/nosotros/' }],
      }),
    }),
    event: defineLocations({
      select: { title: 'title', route: 'route' },
      resolve: (doc) => ({
        locations: [
          ...(doc?.route === 'ferrol'
            ? [{ title: doc?.title || 'Evento', href: '/ferrol/' }]
            : []),
          { title: doc?.title || 'Evento', href: '/' },
        ],
      }),
    }),
    fixedProgram: defineLocations({
      select: { name: 'name', route: 'route' },
      resolve: (doc) => ({
        locations:
          doc?.route === 'ferrol' ? [{ title: doc?.name || 'Programa fijo', href: '/ferrol/' }] : [],
      }),
    }),
    mobilityProgram: defineLocations({
      select: { name: 'name', route: 'route' },
      resolve: (doc) => ({
        locations:
          doc?.route === 'irse' || doc?.route === 'en'
            ? [{ title: doc?.name || 'Programa de movilidad', href: `/${doc.route}/` }]
            : [],
      }),
    }),
    faq: defineLocations({
      select: { question: 'question', route: 'route' },
      resolve: (doc) => ({
        locations:
          doc?.route === 'ferrol' || doc?.route === 'irse' || doc?.route === 'en'
            ? [{ title: doc?.question || 'Pregunta frecuente', href: `/${doc.route}/` }]
            : [],
      }),
    }),
    testimonial: defineLocations({
      select: { name: 'name', route: 'route' },
      resolve: (doc) => ({
        locations: [
          { title: doc?.name || 'Testimonio', href: '/' },
          ...(doc?.route === 'en' ? [{ title: doc?.name || 'Testimonio', href: '/en/' }] : []),
          ...(doc?.route === 'nosotros'
            ? [{ title: doc?.name || 'Testimonio', href: '/nosotros/' }]
            : []),
        ],
      }),
    }),
  },
}
