import {
  createGlobalTheme,
  createTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';
import { classNamePrefix } from '../constants/styles';
import { ThemeMode, ThemeName } from '../types';
import { flatten } from 'flat';
import { NestedObjKeys } from '../types/flat';
import tokens from './tokens';
import { getLightDarkColors } from '../utils/theme-helpers';

type WindowsTokenNames = NestedObjKeys<typeof tokens.windows.light>;
type MacosTokenNames = NestedObjKeys<typeof tokens.macos.light>;

const globalWindowsColors: Record<string, WindowsTokenNames> = {
  background: 'background.fill_color.solid_background.base',
};

const globalMacosColors: Record<string, MacosTokenNames> = {
  background: 'windows.windowBackground',
};

const windowsColors = getLightDarkColors('windows', globalWindowsColors);
const macosColors = getLightDarkColors('macos', globalMacosColors);

const windowsVars = {
  'font-family': {
    system:
      '"Segoe UI Variable", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, sans-serif',
  },
};

const themeVars = createGlobalThemeContract(
  { colors: windowsColors.light, ...windowsVars },
  (_value: string | null, path: string[]) =>
    `${classNamePrefix}-${path.join('-').replace('.', '_')}`,
);

export const windowsTheme = {
  name: 'windows',
  light: createTheme(
    themeVars,
    { colors: windowsColors.light, ...windowsVars },
    'windows-light',
  ),
  dark: createTheme(
    themeVars,
    { colors: windowsColors.dark, ...windowsVars },
    'windows-dark',
  ),
};

const macosVars = {
  'font-family': {
    system: 'system-ui, BlinkMacSystemFont, sans-serif',
  },
};
export const macosTheme = {
  name: 'macos',
  light: createTheme(
    themeVars,
    { colors: macosColors.light, ...macosVars },
    'macos-light',
  ),
  dark: createTheme(
    themeVars,
    { colors: macosColors.dark, ...macosVars },
    'macos-dark',
  ),
};

export const themes = {
  windows: windowsTheme,
  macos: macosTheme,
};

export const vars = { ...themeVars };
