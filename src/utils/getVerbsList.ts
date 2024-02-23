import { IDataDB } from '../models/IDataDB'
import { API_ENDPOINT } from '../models/constants'
import { Request } from './request'

type IAllTense = {
  [temp: string]: IDataDB
}

let allTense: IAllTense = {}

export const getVerbsList = async (tense = 'present'): Promise<{ verbs: IDataDB | undefined }> => {
  if (allTense[tense]) {
    return { verbs: allTense[tense] }
  }

  const response = await Request(`${API_ENDPOINT}${tense}`)
  allTense[tense] = response
  return { verbs: allTense[tense] }
}
