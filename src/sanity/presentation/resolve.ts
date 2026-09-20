import { defineLocations } from 'sanity/presentation'
import type { PresentationPluginOptions } from 'sanity/presentation'

export const presentationResolve: PresentationPluginOptions['resolve'] = {
  locations: {
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
    edicion: defineLocations({
      select: { titulo: 'titulo', experienciaSlug: 'experiencia.slug.current' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.titulo || 'Edición',
            href: doc?.experienciaSlug ? `/experiencias/${doc.experienciaSlug}/` : '/experiencias/',
          },
        ],
      }),
    }),
  },
}
