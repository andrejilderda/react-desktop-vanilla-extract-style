import tokens from '../themes/tokens';
import { ThemeName } from '../types';
import { NestedObjKeys } from '../types/flat';
import { get } from 'lodash';

/**
 * Get light & dark colors for createTheme
 */
export const getLightDarkColors = (
  theme: ThemeName,
  colors: Record<
    string,
    NestedObjKeys<typeof tokens.windows.light | typeof tokens.macos.light>
  >,
) => {
  const themeTokensLight = tokens[theme].light;
  const themeTokensDark = tokens[theme].dark;

  return Object.entries(colors).reduce(
    (acc, [key, tokenName]) => {
      const lightValue = get(themeTokensLight, tokenName);
      const darkValue = get(themeTokensDark, tokenName);

      if (!lightValue || !darkValue)
        throw new Error(`Token for value '${tokenName}' in theme not found.`);

      return {
        light: {
          ...acc.light,
          [key]: lightValue,
        },
        dark: {
          ...acc.dark,
          [key]: darkValue,
        },
      };
    },
    { light: {}, dark: {} },
  );
};
