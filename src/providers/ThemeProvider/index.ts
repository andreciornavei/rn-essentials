import styledImport from '@emotion/native';
import { ThemeProvider, useTheme } from '@emotion/react';
import { defaultTheme } from './default_theme';

type BaseTheme = typeof defaultTheme;

declare module '@emotion/react' {
  // tslint:disable-next-line:no-empty-interface
  export interface Theme extends BaseTheme {}
}

declare module '@emotion/native' {
  // tslint:disable-next-line:no-empty-interface
  export interface Theme extends BaseTheme {}
}

const styled = styledImport;
export { ThemeProvider, useTheme, styled, defaultTheme };
