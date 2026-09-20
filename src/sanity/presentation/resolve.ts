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
        locations: [{ title: doc?.heroHeading || 'Página Agenda', href: '/agenda/' }],
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
            ? [{ title: doc?.title || 'Evento', href: '/agenda/' }]
            : []),
          { title: doc?.title || 'Evento', href: '/' },
        ],
      }),
    }),
    fixedProgram: defineLocations({
      select: { name: 'name', route: 'route' },
      resolve: (doc) => ({
        locations:
          doc?.route === 'ferrol' ? [{ title: doc?.name || 'Programa fijo', href: '/agenda/' }] : [],
      }),
    }),
    mobilityProgram: defineLocations({
      select: { name: 'name', route: 'route' },
      resolve: (doc) => ({
        locations:
          doc?.route === 'en' ? [{ title: doc?.name || 'Programa de movilidad', href: '/volunteering/' }] : [],
      }),
    }),
    faq: defineLocations({
      select: { question: 'question', route: 'route' },
      resolve: (doc) => ({
        locations:
          doc?.route === 'ferrol'
            ? [{ title: doc?.question || 'Pregunta frecuente', href: '/agenda/' }]
            : doc?.route === 'en'
              ? [{ title: doc?.question || 'Pregunta frecuente', href: '/volunteering/' }]
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
    experiencia: defineLocations({
      select: { titulo: 'titulo', slug: 'slug.current', enlaceExterno: 'enlaceExterno' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.titulo || 'Experiencia',
            href: doc?.enlaceExterno ? '/experiencias/' : `/experiencias/${doc?.slug ?? ''}/`,
          },
        ],
      }),
    }),
    convocatoria: defineLocations({
      select: { titulo: 'titulo', experienciaSlug: 'experiencia.slug.current' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.titulo || 'Convocatoria',
            href: doc?.experienciaSlug ? `/experiencias/${doc.experienciaSlug}/` : '/experiencias/',
          },
        ],
      }),
    }),
  },
}
