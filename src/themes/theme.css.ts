import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  createGlobalThemeContract,
  style,
} from '@vanilla-extract/css';
import button from '../components/Button/themes';
import checkboxVariablesWin11 from '../components/Button/themes/windows';
import { classNamePrefix } from '../constants/styles';
import { ThemeMode, ThemeName } from '../types';

const root = createGlobalTheme('#app', {
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
});

const getVariables = (theme: ThemeName, mode: ThemeMode = 'light') => {
  return {
    ...button[theme](mode),
  };
};

const colors = createGlobalThemeContract(
  getVariables('windows', 'light'),
  (_value: string | null, path: string[]) =>
    `${classNamePrefix}-${path.join('-').replace('.', '_')}`,
);

export const windowsTheme = {
  light: createTheme(colors, getVariables('windows', 'light'), 'windows-light'),
  dark: createTheme(colors, getVariables('windows', 'dark'), 'windows-dark'),
};

export const macosTheme = {
  name: 'macos',
  light: createTheme(colors, getVariables('macos', 'light'), 'macos-light'),
  dark: createTheme(colors, getVariables('macos', 'dark'), 'macos-dark'),
};

export const storybookPreview = style({
  background: colors.background,
  padding: 20,
});

export const vars = { ...root, colors };
