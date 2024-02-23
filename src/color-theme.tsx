import { ThemeType } from 'grommet'

export const colorTheme: ThemeType = {
  global: {
    colors: {
      /* BEGIN: Color Palette Definition */
      raisin: {
        dark: '#2d305e',
        light: '#747bff',
      },
      cyan: {
        dark: '#00ffeab8',
        light: '#1d988eb8',
      },
      'cyan!': '#00ffeab8',
      /* END: Color Palette Definition */
      /* BEGIN: Mapping Colors to Grommet Namespaces */
      background: {
        dark: 'dark-1',
        light: 'white',
      },
      brand: 'raisin',
      text: {
        dark: 'light-6',
        light: 'dark-1',
      },
      icon: {
        dark: 'dark-6',
        light: 'dark-1',
      },
      control: 'cyan',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '14px',
    },
    /* END: Mapping Colors to Grommet Namespaces */
  },
  /* BEGIN: Mapping Colors to Components */
  button: {
    color: {
      dark: 'white',
      light: 'black',
    },
  },
  select: {
    clear: {
      container: {
        background: 'black',
      },
    },
  },
  /* END: Mapping Colors to Components */
}
