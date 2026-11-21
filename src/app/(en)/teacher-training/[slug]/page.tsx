import { TEACHER_TRAINING } from '@/content/teacherTraining'

import { courseMetadata, courseParams, CourseView } from '../_views'

const content = TEACHER_TRAINING.en

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
