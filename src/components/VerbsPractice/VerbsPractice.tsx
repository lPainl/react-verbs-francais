import { Box, Button, Form, Grid, Text, TextInput } from 'grommet'
import { Dislike, Like } from 'grommet-icons'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IDataDB } from '../../models/IDataDB'
import { IPracticePhrase } from '../../models/IPracticePhrase'
import { SUBJECTS } from '../../models/constants'
import { getVerbsList } from '../../utils/getVerbsList'

const MAX_VERBS_NUMBER = 6

export const VerbsPractice: React.FC = () => {
  const { tense } = useParams()
  const [allVerbs, setAllVerbs] = useState<IDataDB | undefined>()
  const [verbsList, setVerbsList] = useState<IPracticePhrase[]>([])
  const [responses, setResponses] = useState<string[]>([])
  const [correct, setCorrect] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const columns = ['xsmall', 'small', 'small', 'small', 'xsmall', 'xsmall']

  useEffect(() => {
    const getAllVerbs = async () => {
      const { verbs } = await getVerbsList(tense)
      setAllVerbs(verbs)
    }

    getAllVerbs()
  }, [tense])

  useEffect(() => {
    regenerate()
  }, [allVerbs])

  const verify = () => {
    setCorrect(true)
  }

  const clean = () => {
    const newResponses: string[] = []
    verbsList.map((verb, index) => {
      if (responses[index] !== verb.conjugation) {
        return
      }
      newResponses[index] = responses[index]
    })
    setCorrect(false)
    setResponses(newResponses)
    setShowSolution(false)
  }

  const regenerate = () => {
    setResponses([])
    if (!allVerbs) {
      return
    }

    const verbs = Object.keys(allVerbs)
    const subjects = Object.values(SUBJECTS)
    const maxVerbs = verbs.length

    if (!maxVerbs) {
      return
    }

    const newVerbsList: IPracticePhrase[] = []
    const verbsNumber = Math.random() * (MAX_VERBS_NUMBER - 1) + 1
    const newCorrectResponses = []

    for (let index = 0; index < verbsNumber; index++) {
      const verbIndex = Math.floor(Math.random() * maxVerbs)
      const verbKey = verbs[verbIndex]
      const verbToPractice = allVerbs[verbKey]
      let subjectIndex = Math.floor(Math.random() * subjects.length)
      let subjectKey = subjects[subjectIndex]
      let phraseToPractice = verbToPractice[subjectKey]
      while (!phraseToPractice) {
        subjectIndex = Math.floor(Math.random() * subjects.length)
        subjectKey = subjects[subjectIndex]
        phraseToPractice = verbToPractice[subjectKey]
      }
      const { conjugation, complement } = phraseToPractice
      newCorrectResponses.push(conjugation)
      newVerbsList.push({
        infinitive: verbKey,
        subject: subjectKey,
        conjugation,
        complement,
      })
    }

    setVerbsList(newVerbsList)
    setCorrect(false)
    setShowSolution(false)
  }

  const handleChange = (response: string, responseKey: number) => {
    responses[responseKey] = response
    setResponses([...responses])
  }

  return (
    <main>
      <Box pad="small">
        <Text color={'status-error'} size="large">
          {tense}
        </Text>
      </Box>

      <Form>
        {verbsList.map((verb: IPracticePhrase, key: number) => {
          return (
            <Grid rows={['auto']} columns={columns} align="center" pad="small" width={{ max: '60%' }} key={key}>
              <Text>{verb.subject}</Text>
              <Box width={{ max: '80%' }}>
                <TextInput
                  value={responses[key] ?? ''}
                  onChange={(event) => handleChange(event.target.value, key)}
                ></TextInput>
              </Box>
              <Text>{verb.complement}</Text>
              <Text color={{ dark: 'accent-2', light: 'neutral-3' }}>({verb.infinitive})</Text>
              {correct &&
                (responses[key] === verb.conjugation ? (
                  <Like color="status-ok" size="medium" />
                ) : (
                  <Dislike color="status-critical" size="medium" />
                ))}
              {showSolution && (
                <Text color={{ dark: 'status-critical', light: 'status-error' }} weight="bolder">
                  {verb.conjugation}
                </Text>
              )}
            </Grid>
          )
        })}
        <Box margin={{ top: 'large' }} direction="row" gap="medium">
          <Button primary type="submit" label="Vérifier" onClick={verify} />
          <Button secondary type="button" label="Effacer" onClick={clean} />
          <Button onClick={() => setShowSolution(true)}>
            <Text>Résolution</Text>
          </Button>
          <Button secondary type="button" label="Nouveaux" onClick={() => regenerate()} />
        </Box>
      </Form>
    </main>
  )
}
