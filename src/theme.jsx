import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f6e9e7',
      main: '#c5b9a3',
      dark: '#666465',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e1ccd1',
      main: '#a27e82',
      dark: '#6c4f54',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export { MuiThemeProvider, theme }
