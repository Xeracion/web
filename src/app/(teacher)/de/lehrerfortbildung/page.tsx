import { HubView, hubMetadata } from '@/app/(en)/teacher-training/_views'
import { TEACHER_TRAINING } from '@/content/teacherTraining'

const content = TEACHER_TRAINING.de

export const generateMetadata = () => hubMetadata(content)

export default function TeacherTrainingPage() {
  return <HubView content={content} />
}
