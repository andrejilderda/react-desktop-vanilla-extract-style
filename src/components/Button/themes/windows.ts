import { ThemeMode } from '../../../types';
import { getTokens } from '../../../utils/helpers';

const checkboxVariables = (mode: ThemeMode) => {
  const tokens = getTokens('windows', mode);

  return {
    background: tokens.background.fill_color.solid_background.base,
    checkboxFill: tokens.fill_color.system.attention,
    checkboxFillHover: tokens.fill_color.accent.default,
    checkboxFillActive: tokens.fill_color.text_on_accent.disabled,
  };
};

export default checkboxVariables;
