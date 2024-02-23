import { type SUBJECTS } from './constants'

export type SubjectType = (typeof SUBJECTS)[keyof typeof SUBJECTS]
