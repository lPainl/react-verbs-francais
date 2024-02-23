import { type IComplement } from './IComplement'
import { type SubjectType } from './types'

export interface IPhrase extends IComplement {
  subject: SubjectType
}
