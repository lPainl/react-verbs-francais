import { Box, Button, Grommet, Header, grommet } from 'grommet'
import { Moon } from 'grommet-icons'
import { deepMerge } from 'grommet/utils'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { colorTheme } from './color-theme'
import { AnchorLink } from './components/Common/AnchorLink'

const App = (): JSX.Element => {
  const theme = deepMerge(grommet, colorTheme)

  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'} full>
      <Header pad="small" background="brand">
        <h1>Les Verbes Français</h1>
        <Box direction="row" justify="start" width="50%" gap="large">
          <AnchorLink to={'/'} label="Accueil" />
          <AnchorLink to={'/practice/present'} label="Present" />
          <AnchorLink to={'/practice/passe_compose'} label="Passé Composé" />
        </Box>
        <Button icon={<Moon />} onClick={() => setDarkMode(!darkMode)} />
      </Header>
      <Box pad="medium">
        <Outlet />
      </Box>
    </Grommet>
  )
}

export default App
