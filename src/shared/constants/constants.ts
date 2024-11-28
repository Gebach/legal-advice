import { alpha, createTheme } from '@mui/material'
import MontserratWoff2 from '../fonts/Montserrat-Regular__400.woff2'

export const THEME = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1140,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#292d33',
    },
    secondary: {
      main: '#85afe0',
      light: '#b6d0ed',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Montserrat'), local('Montserrat-Regular'), url(${MontserratWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },

    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: 'white', // Цвет нижней границы
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'white', // Цвет нижней границы при наведении
          },
          '&:after': {
            borderBottomColor: 'white', // Цвет нижней границы при фокусе
          },
        },
        input: {
          color: 'white', // Цвет вводимого текста
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white', // Цвет текста лейбла
          '&.Mui-focused': {
            color: alpha('#fff', 0.8), // Цвет текста лейбла при фокусе
          },
        },
      },
    },
  },
})

export const REGEX: Record<string, RegExp> = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  name: /^[a-zA-Zа-яА-ЯёЁ\s]{2,}$/,
}
