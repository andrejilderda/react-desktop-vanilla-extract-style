import { ThemeMode } from '../../../types';
import { getTokens } from '../../../utils/helpers';

const buttonVars = (mode: ThemeMode) => {
  const tokens = getTokens('windows', mode);

  return {
    background: tokens.background.fill_color.solid_background.base,
    fill: tokens.fill_color.system.attention,
    checkboxFillHover: tokens.fill_color.accent.default,
    checkboxFillActive: tokens.fill_color.text_on_accent.disabled,

    // fill: tokens.fill_color.accent.default,
    // 'fill-hover': tokens.fill_color.accent.secondary,
    // 'fill-active': tokens.fill_color.accent.tertiary,
    // 'fill-disabled': `${tokens.fill_color.accent.disabled}`,

    // stroke: tokens.stroke_color.control_stroke['on accent default'],

    // 'elevation-stroke':
    //   tokens.stroke_color.control_stroke['on accent secondary'],

    // // text
    // text: tokens.fill_color.text_on_accent.primary,
    // 'text-active': tokens.fill_color.text_on_accent.secondary,
    // 'text-disabled': tokens.fill_color.text_on_accent.disabled,
  };
};

export default buttonVars;
