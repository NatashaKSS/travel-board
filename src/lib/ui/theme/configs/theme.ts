import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/**
 * App-wide Theme
 */
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        contrastText: '#000000',
        main: '#66bed9',
        light: '#b3edff',
        dark: '#077fa3',
      },
    },
    typography: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
  })
);

export default theme;
