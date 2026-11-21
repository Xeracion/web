import { teacherTrainingEn } from '../en/teacherTraining'
import { teacherTrainingDe } from './de'
import { teacherTrainingFr } from './fr'
import { teacherTrainingNl } from './nl'
import type { TeacherCourse, TeacherTrainingContent, TeacherTrainingLang } from './types'

export type { TeacherCourse, TeacherTrainingContent, TeacherTrainingLang } from './types'

/** Las cuatro versiones de los cursos para profesorado. La inglesa es la de referencia (x-default). */
export const TEACHER_TRAINING: Record<TeacherTrainingLang, TeacherTrainingContent> = {
  en: teacherTrainingEn,
  de: teacherTrainingDe,
  nl: teacherTrainingNl,
  fr: teacherTrainingFr,
}

export function coursePath(content: TeacherTrainingContent, course: TeacherCourse): string {
  return `${content.basePath}${course.slug}/`
}

export function getCourse(content: TeacherTrainingContent, slug: string): TeacherCourse | undefined {
  return content.courses.find((course) => course.slug === slug)
}

export { teacherTrainingAlternates, teacherTrainingRoutes } from './paths'
