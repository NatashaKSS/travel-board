import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CustomThemeProviderProps } from './CustomThemeProvider.types';
import MaterialUiTheme from '../../configs/theme';

/**
 * Wraps any component with this application's theme, allowing it to access any theme property within its context.
 *
 * @param {React.ReactNode} children  Any React component
 * @returns {React.ReactNode}  The input React component wrapped with the theme provider
 */
const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  return <ThemeProvider theme={MaterialUiTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
