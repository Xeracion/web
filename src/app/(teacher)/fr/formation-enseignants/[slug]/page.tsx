import { courseMetadata, courseParams, CourseView } from '@/app/(en)/teacher-training/_views'
import { TEACHER_TRAINING } from '@/content/teacherTraining'

const content = TEACHER_TRAINING.fr

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export const generateStaticParams = () => courseParams(content)

export async function generateMetadata({ params }: PageProps) {
  return courseMetadata(content, (await params).slug)
}

export default async function TeacherCoursePage({ params }: PageProps) {
  return <CourseView content={content} slug={(await params).slug} />
}
