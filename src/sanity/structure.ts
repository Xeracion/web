import type { StructureBuilder, StructureResolver } from 'sanity/structure'

import { SINGLETON_TITLES } from './singletons'

function singletonListItem(S: StructureBuilder, type: string) {
  const title = SINGLETON_TITLES[type] ?? type
  return S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items([
              S.listItem()
                .title('Español')
                .child(
                  S.list()
                    .title('Español')
                    .items([
                      singletonListItem(S, 'home'),
                      singletonListItem(S, 'pageFerrol'),
                      singletonListItem(S, 'pageIrse'),
                      singletonListItem(S, 'pageNosotros'),
                      singletonListItem(S, 'pageMentores'),
                    ]),
                ),
              S.listItem()
                .title('English')
                .child(
                  S.list()
                    .title('English')
                    .items([
                      singletonListItem(S, 'homeEn'),
                      singletonListItem(S, 'pageFerrolEn'),
                      singletonListItem(S, 'pageEn'),
                      singletonListItem(S, 'pageNosotrosEn'),
                    ]),
                ),
            ]),
        ),
      S.listItem()
        .title('Agenda')
        .child(
          S.list()
            .title('Agenda')
            .items([
              S.documentTypeListItem('event').title('Eventos'),
              S.documentTypeListItem('fixedProgram').title('Programas fijos'),
              S.documentTypeListItem('mobilityProgram').title('Programas de movilidad'),
              S.documentTypeListItem('faq').title('Preguntas frecuentes'),
            ]),
        ),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categorías'),
            ]),
        ),
      S.listItem()
        .title('Personas')
        .child(
          S.list()
            .title('Personas')
            .items([
              S.documentTypeListItem('author').title('Autores'),
              S.documentTypeListItem('testimonial').title('Testimonios'),
            ]),
        ),
      S.divider(),
      singletonListItem(S, 'siteSettings'),
    ])
