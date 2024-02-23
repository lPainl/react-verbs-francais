import { type SubjectType } from './types'

export const SUBJECTS = {
  JE: 'Je',
  J: "J'",
  TU: 'Tu',
  IL: 'Il',
  ELLE: 'Elle',
  NOUS: 'Nous',
  VOUS: 'Vous',
  ILS: 'Ils',
  ELLES: 'Elles',
} as const

export const LIST_SUBJECTS: SubjectType[][] = [
  ['Je', "J'"],
  ['Tu'],
  ['Il', 'Elle'],
  ['Nous'],
  ['Vous'],
  ['Ils', 'Elles'],
]

export const API_ENDPOINT = 'http://localhost:5000/'
