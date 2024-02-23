import { Box, Text } from 'grommet'

import { SubjectType } from '../../models/types'
import { useVerbsList } from '../../utils/getVerbsList'

export const VerbsList: React.FC = () => {
  const { verbs } = useVerbsList()

  const container = [['header'], ['content']]

  console.log(verbs)

  return (
    <Box direction="column" gap="medium">
      <Box gridArea="header" direction="row" gap="medium">
        <Box width={'200px'}>Verb</Box>
        <Box>Conjugaison</Box>
      </Box>
      <Box direction="column" gap="20px" gridArea="content">
        {verbs &&
          Object.keys(verbs).map((verb, key) => {
            return (
              <Box direction="row" gap="medium">
                <Box width={'200px'}>
                  <Text>
                    <strong>{verb}</strong>
                  </Text>
                </Box>
                <Box direction="column" key={key} gap="small">
                  {Object.keys(verbs[verb]).map((subject, key: number) => {
                    return (
                      <Text key={key}>
                        {subject} {verbs[verb][subject as SubjectType]?.conjugation}{' '}
                        {verbs[verb][subject as SubjectType]?.complement}
                      </Text>
                    )
                  })}
                </Box>
              </Box>
            )
          })}
      </Box>
    </Box>
  )
}
