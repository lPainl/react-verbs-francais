import React, { useState } from 'react'
import { type IPhrase } from '../../models/IPhrase.1'
import { SUBJECTS } from '../../models/constants'
import { type SubjectType } from '../../models/types'

interface Props {
  subject: SubjectType
}
export const Phrase: React.FC<Props> = ({ subject = SUBJECTS.JE }) => {
  const defaultPhrase: IPhrase = {
    subject,
    conjugation: '',
    complement: '',
  }

  const [phrase, setPhraseToSave] = useState(defaultPhrase)

  const handleChange = (event: any): void => {
    setPhraseToSave({
      ...phrase,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <input
        type="text"
        name="subject"
        placeholder="subject"
        id="subject"
        onChange={handleChange}
        value={phrase.subject}
      />
      <input
        type="text"
        name="conjugation"
        placeholder="conjugation"
        id="conjugation"
        onChange={handleChange}
        value={phrase.conjugation}
      />
      <input
        type="text"
        name="complement"
        placeholder="Complement"
        id="complement"
        onChange={handleChange}
        value={phrase.complement}
      />
    </>
  )
}
