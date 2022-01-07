import { ThemeMode } from '../../../types';
import { getTokens } from '../../../utils/helpers';

const checkboxVariables = (mode: ThemeMode) => {
  const tokens = getTokens('macos', mode);

  return {
    background: tokens.windows.windowBackground,
    checkboxFill: tokens.base.pink,
    checkboxFillHover: tokens.base.yellow,
    checkboxFillActive: tokens.base.indigo,
  };
};

export default checkboxVariables;
