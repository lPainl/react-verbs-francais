import { IComplement } from './IComplement'
import { SubjectType } from './types'

export type IDataVerbDB = {
  [subject in SubjectType]?: IComplement
}

export interface IDataDB {
  [verb: string]: IDataVerbDB
}
