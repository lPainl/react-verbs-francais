import { Button, TextInput } from 'grommet'
import React, { useEffect, useState } from 'react'
import { type IConjugation } from '../../models/IConjugation'
import { IPhrase } from '../../models/IPhrase'
import { LIST_SUBJECTS } from '../../models/constants'
import { type SubjectType } from '../../models/types'
import { PhraseForm } from '../PhraseForm/PhraseForm'
import './VerbForm.css'

export const VerbForm: React.FC = () => {
  const defaultConjugation: IConjugation = {
    verbInfinitive: '',
    verbConjugations: [],
  }

  const [disabled, setDisabled] = useState(true)
  const [conjugation, setConjugation] = useState(defaultConjugation)

  useEffect(() => {
    const verbsConjugationsWithSubjects: IPhrase[] = LIST_SUBJECTS.map((subjectOptions: SubjectType[]) => {
      return {
        subject: subjectOptions[0],
        conjugation: '',
        complement: '',
      }
    })
    setConjugation({
      ...conjugation,
      verbConjugations: verbsConjugationsWithSubjects,
    })
  }, [])

  useEffect(() => {
    const isSomeConjugationEmpty = conjugation.verbConjugations.some(
      (verbConjugation) => verbConjugation.conjugation === ''
    )

    const isVerbEmpty = conjugation.verbInfinitive === ''

    setDisabled(isVerbEmpty || isSomeConjugationEmpty)
  })

  const handleChange = (event: any): void => {
    const { name, value } = event.target
    const newConjugation = {
      ...conjugation,
      [name]: value,
    }
    setConjugation(newConjugation)
  }

  const phraseConjugated = (phraseToSave: IPhrase, arrayKey: number): void => {
    const newVerbConjugations = conjugation.verbConjugations
    newVerbConjugations[arrayKey] = phraseToSave

    handleChange({
      target: {
        name: 'verbConjugations',
        value: newVerbConjugations,
      },
    })
  }

  const handleVerbSubmit = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log('save')
    console.log(conjugation)
  }

  return (
    <form className="container_verb_form" onSubmit={handleVerbSubmit}>
      <TextInput
        type="text"
        name="verbInfinitive"
        placeholder="verb"
        className="container_verb_form__input"
        id="verb"
        value={conjugation.verbInfinitive}
        onChange={handleChange}
      />
      {LIST_SUBJECTS.map((subjectOptions: SubjectType[], key: number) => {
        return (
          <PhraseForm
            subjects={subjectOptions}
            key={key}
            arrayIndex={key}
            phraseConjugated={phraseConjugated}
          ></PhraseForm>
        )
      })}
      <Button primary type="submit" label="SAUVEGARDER" disabled={disabled} />
    </form>
  )
}
