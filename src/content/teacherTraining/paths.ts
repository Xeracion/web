import type { TeacherCourseId, TeacherTrainingLang } from './types'

// Rutas de los cursos para profesorado en cada idioma. Archivo aparte y sin
// textos: lo usa también el selector de idioma (código de cliente), que así no
// carga el contenido de las cuatro versiones.

export const TEACHER_TRAINING_PATHS: Record<TeacherTrainingLang, { base: string } & Record<TeacherCourseId, string>> = {
  en: {
    base: '/teacher-training/',
    camino: 'outdoor-learning-camino-de-santiago',
    forest: 'environmental-education-forest-restoration',
    ai: 'ai-tools-erasmus-project-coordinators',
  },
  de: {
    base: '/de/lehrerfortbildung/',
    camino: 'draussenlernen-jakobsweg',
    forest: 'umweltbildung-waldrestaurierung',
    ai: 'ki-tools-erasmus-koordinatoren',
  },
  nl: {
    base: '/nl/nascholing-leraren/',
    camino: 'buitenleren-camino-de-santiago',
    forest: 'natuuronderwijs-bosherstel',
    ai: 'ai-tools-erasmus-coordinatoren',
  },
  fr: {
    base: '/fr/formation-enseignants/',
    camino: 'apprentissage-plein-air-chemin-de-compostelle',
    forest: 'education-environnement-restauration-foret',
    ai: 'outils-ia-coordinateurs-erasmus',
  },
}

const LANGS = Object.keys(TEACHER_TRAINING_PATHS) as TeacherTrainingLang[]
const IDS: TeacherCourseId[] = ['camino', 'forest', 'ai']

/** hreflang del índice (id undefined) o de una ficha: las cuatro versiones y el inglés por defecto. */
export function teacherTrainingAlternates(id?: TeacherCourseId): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const lang of LANGS) {
    const paths = TEACHER_TRAINING_PATHS[lang]
    languages[lang] = id ? `${paths.base}${paths[id]}/` : paths.base
  }
  return { ...languages, 'x-default': languages.en }
}

/** Todas las rutas con sus alternativas: sitemap y selector de idioma. */
export function teacherTrainingRoutes(): Array<{ path: string; lang: TeacherTrainingLang; alternates: Record<string, string> }> {
  return LANGS.flatMap((lang) => {
    const paths = TEACHER_TRAINING_PATHS[lang]
    return [
      { path: paths.base, lang, alternates: teacherTrainingAlternates() },
      ...IDS.map((id) => ({ path: `${paths.base}${paths[id]}/`, lang, alternates: teacherTrainingAlternates(id) })),
    ]
  })
}
