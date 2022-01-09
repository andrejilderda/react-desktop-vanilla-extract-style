import {
  CSS,
  CSSProperties,
  StyleWithSelectors,
} from '@vanilla-extract/css/dist/declarations/src/types';
import { Nullable } from 'ts-toolbelt/out/Object/Nullable';
import { classNamePrefix } from '../constants/styles';
import macosTokens from '../themes/macos/tokens';
import { macosTheme, windowsTheme } from '../themes/theme.css';
import windowsTokens from '../themes/windows/tokens';
import { ThemeMode, ThemeName } from '../types';

// iterate over an object and make all object properties null
export function objToNull<T extends object>(obj: T): Nullable<T, '', 'deep'> {
  return Object.entries(obj).reduce<any>((acc, [key, value]) => {
    if (typeof value === 'object') {
      return { ...acc, [key]: objToNull(value) };
    }

    return { ...acc, [key]: null };
  }, {});
}

/**
 * Returns a token from a token object
 * @example getToken('windows', 'light').fill_color.accent.default
 */
// prettier-ignore
export function getTokens<T extends ThemeMode>(theme: 'windows', mode: T): typeof windowsTokens[T];
// prettier-ignore
export function getTokens<T extends ThemeMode>(theme: 'macos', mode: T): typeof macosTokens[T];
export function getTokens(theme: ThemeName, mode: ThemeMode) {
  const tokens = theme === 'windows' ? windowsTokens : macosTokens;

  return tokens[mode];
}

/**
 * Specify CSS properties for a certain theme specifically.
 * Make sure to spread the result inside `selectors`.
 *
 * @example
 * {
 *   // ...other styles
 *   selectors: {
 *     ...forTheme({
 *       windows: {
 *         background: 'blue',
 *       },
 *       macos: {
 *         background: 'marineblue'
 *       }
 *     })
 *   }
 * }
 */

type SelectorMap = StyleWithSelectors['selectors'];
export const forTheme = (forThemeProperties: SelectorMap): SelectorMap => {
  const selectors = Object.entries(forThemeProperties || {}).reduce(
    (acc, [key, value]) => {
      const themeClassNames =
        key === 'windows'
          ? `.${windowsTheme.light} &, .${windowsTheme.dark} &`
          : `.${macosTheme.light} &, .${macosTheme.dark} &`;

      return { ...acc, [`${themeClassNames}`]: value };
    },
    {},
  );

  return selectors;
};

/**
 * Returns nested custom properties for fallbacks, like:
 * `var(--rd--strokeActive, var(--rd--strokeDisabled, var(--rd--strokeHover, var(--stroke))))`
 *
 * @example
 * '&[disabled]': {
 *   backgroundColor: composeVars(['fillDisabled', 'fill']),
 * }
 */
export const composeVars = (props: string[]) => {
  return [...props].reverse().reduce((acc, variable, index) => {
    if (index === 0) return variable;

    // Stitches doesn't allow a custom property fallback, so we construct our
    // own classname
    return `var(--${classNamePrefix}--${variable.replaceAll(
      '$$',
      '',
    )}, ${acc})`;
  }, '');
};
