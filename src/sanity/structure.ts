import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.documentTypeListItem('experiencia').title('Experiencias'),
      S.documentTypeListItem('convocatoria').title('Convocatorias'),
      S.documentTypeListItem('edicion').title('Ediciones anteriores'),
      S.divider(),
      S.documentTypeListItem('avisoInteres').title('Avisos de interés'),
    ])
