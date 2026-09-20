import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.documentTypeListItem('experiencia').title('Experiencias'),
      S.documentTypeListItem('convocatoria').title('Convocatorias'),
    ])
