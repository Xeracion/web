import { imageWithAlt } from './objects/imageWithAlt'
import { pullQuote } from './objects/pullQuote'
import { socialLink } from './objects/socialLink'
import { statItem } from './objects/statItem'
import { processStep } from './objects/processStep'
import { sectionIntro } from './objects/sectionIntro'
import { lifeInFerrolPhoto } from './objects/lifeInFerrolPhoto'
import { infoColumn } from './objects/infoColumn'
import { routeCard } from './objects/routeCard'
import { timelineMilestone } from './objects/timelineMilestone'
import { valueItem } from './objects/valueItem'
import { teamMember } from './objects/teamMember'
import { initiative } from './objects/initiative'
import { partner } from './objects/partner'

import { siteSettings } from './documents/siteSettings'
import { home } from './documents/home'
import { pageFerrol } from './documents/pageFerrol'
import { pageIrse } from './documents/pageIrse'
import { pageEn } from './documents/pageEn'
import { pageNosotros } from './documents/pageNosotros'
import { event } from './documents/event'
import { fixedProgram } from './documents/fixedProgram'
import { testimonial } from './documents/testimonial'
import { mobilityProgram } from './documents/mobilityProgram'
import { faq } from './documents/faq'
import { post } from './documents/post'
import { author } from './documents/author'
import { category } from './documents/category'

export const schemaTypes = [
  // Objetos reutilizables
  imageWithAlt,
  pullQuote,
  socialLink,
  statItem,
  processStep,
  sectionIntro,
  lifeInFerrolPhoto,
  infoColumn,
  routeCard,
  timelineMilestone,
  valueItem,
  teamMember,
  initiative,
  partner,

  // Documentos únicos
  siteSettings,
  home,
  pageFerrol,
  pageIrse,
  pageEn,
  pageNosotros,

  // Colecciones
  event,
  fixedProgram,
  testimonial,
  mobilityProgram,
  faq,
  post,
  author,
  category,
]
