import { colors } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import typography from './typography';
// Create a theme instance.
const theme = createMuiTheme({
  typography,
  palette: {
    background: {
      default: colors.common.white,
      dark: '#f4f6f8',
      paper: colors.common.white,
    },
    primary: {
      main: '#0078C1',
    },
    secondary: {
      main: '#D8D9DA',
      dark: '#565A5C',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
});

export default responsiveFontSizes(theme);
