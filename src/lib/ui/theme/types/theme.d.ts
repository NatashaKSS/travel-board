import { Theme, ThemeOptions } from '@material-ui/core/styles';

/**
 * === TypeScript Module Augmentation for Material UI Themes
 * This allows you to extend the typings for the Material UI theme object and
 * add your own custom attributes to the theme.
 *
 * This also enables Intellisense typeahead suggestions during React component development.
 *
 * Refer to the official documentation:
 * https://material-ui.com/guides/typescript/#augmenting-your-props-using-withstyles
 */

declare module '@material-ui/core/styles' {
  interface Theme {}
  interface ThemeOptions {}
}
