import { Select, TextInput } from 'grommet'
import React, { useState } from 'react'

import { type IPhrase } from '../../models/IPhrase'
import { type SubjectType } from '../../models/types'
import './PhraseForm.css'

interface Props {
  subjects: SubjectType[]
  phraseConjugated: (phrase: IPhrase, arrayKey: number) => void
  arrayIndex: number
}

export const PhraseForm: React.FC<Props> = ({ subjects, phraseConjugated, arrayIndex }) => {
  const defaultPhrase: IPhrase = {
    subject: subjects[0],
    conjugation: '',
    complement: '',
  }

  const [phrase, setPhraseToSave] = useState(defaultPhrase)

  const handleChange = (event: any): void => {
    const newPhrase = {
      ...phrase,
      [event.target.name]: event.target.value,
    }
    setPhraseToSave(newPhrase)
    phraseConjugated(newPhrase, arrayIndex)
  }

  return (
    <div className="container_phrase_form">
      {subjects.length === 1 ? (
        <TextInput type="text" name="subject" id="subject" disabled={true} value={subjects[0]} />
      ) : (
        <Select options={subjects} defaultValue={subjects[0]} name="subject" onChange={handleChange} />
      )}
      <TextInput
        type="text"
        name="conjugation"
        placeholder="conjugation"
        id="conjugation"
        onChange={handleChange}
        value={phrase.conjugation}
      />
      <TextInput
        type="text"
        name="complement"
        placeholder="Complement"
        id="complement"
        onChange={handleChange}
        value={phrase.complement}
      />
    </div>
  )
}
