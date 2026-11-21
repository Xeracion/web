import { TEACHER_TRAINING } from '@/content/teacherTraining'

import { HubView, hubMetadata } from './_views'

const content = TEACHER_TRAINING.en

export const generateMetadata = () => hubMetadata(content)

export default function TeacherTrainingPage() {
  return <HubView content={content} />
}
