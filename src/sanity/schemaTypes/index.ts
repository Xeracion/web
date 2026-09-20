import { imageWithAlt } from './objects/imageWithAlt'

import { experiencia } from './documents/experiencia'
import { convocatoria } from './documents/convocatoria'

export const schemaTypes = [
  // Objetos reutilizables
  imageWithAlt,

  // Catálogo — lo único que sigue editándose desde Sanity Studio (ver
  // CLAUDE.md). El resto del contenido del sitio vive hardcodeado en
  // src/content/*.ts.
  experiencia,
  convocatoria,
]
