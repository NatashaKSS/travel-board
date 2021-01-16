import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/**
 * App-wide Theme
 */
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        contrastText: '#000000',
        main: '#80d8ff',
        light: '#b5ffff',
        dark: '#49a7cc',
      },
    },
  })
);

export default theme;
