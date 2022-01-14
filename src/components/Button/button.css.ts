import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { componentName } from '.';
import selectors from 'src/constants/selectors';
import { classNamePrefix, pseudo } from 'src/constants/styles';
import { vars } from 'src/themes/theme.css';
import { assignTokensToVars } from 'src/utils/helpers';
import windowsVars from './themes/button.windows.css';

// construct a local variable name
const l = ([localVar]: TemplateStringsArray) => {
  const varName = (name: string) =>
    `--${classNamePrefix}-${componentName}-${name}`;

  const splitVariables = (localVar as string)
    .replaceAll(/--/g, '')
    .split(/, /i);
  const [variable, fallback] = splitVariables;

  return fallback
    ? `var(${varName(variable)}, var(${varName(fallback)}))`
    : `var(${varName(variable)})`;
};

export const buttonStyle = style([
  {
    vars: {
      ...Object.fromEntries(
        [
          'border',
          'border-disabled',
          'elevation-stroke',
          'elevation-stroke-active',
          'fill',
          'fill-active',
          'fill-hover',
          'fill-disabled',
          'stroke',
          'stroke-active',
          'text',
          'text-active',
          'text-hover',
          'text-disabled',
          'font-size',
        ].map((key) => [
          `--${classNamePrefix}-${componentName}-${key}`,
          'initial',
        ]),
      ),
    },

    all: 'unset',
    cursor: 'default',
    fontFamily: vars['font-family'].system,
    fontSize: l`--font-size`,
    lineHeight: l`--line-height`,
    padding: l`--padding`,
    textAlign: 'center',
    userSelect: 'none',
    borderColor: l`--border`,
    backgroundColor: l`--fill`,
    color: l`--text`,

    selectors: {
      '&[disabled]': {
        backgroundColor: l`--fill-disabled, --fill`,
        borderColor: l`--border-disabled, --border`,
        color: l`--text-disabled, --text`,
      },

      '&:not([disabled])': {
        boxShadow: `inset 0px ${l`--elevation-y`} 0px 0px ${l`--elevation-stroke`}, inset 0px 0px 0px 1px ${l`--stroke`}`,
      },

      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: l`--fill-hover, --fill`,
        color: l`--text-hover, --text`,
      },

      [`${pseudo.active}:not([disabled])`]: {
        backgroundColor: l`--fill-active, --fill`,
        color: l`--text-active, --text`,
        boxShadow: `inset 0px ${l`--elevation-y`} 0px 0px ${l`--elevation-stroke-active, --elevation-stroke`}, inset 0px 0px 0px 1px ${l`--stroke-active, --stroke`}`,
      },

      [`${selectors.windows}`]: {
        borderRadius: '4px',
      },

      [windowsVars.light.selector]: { vars: windowsVars.light.vars },
      [windowsVars.dark.selector]: {
        vars: {
          ...windowsVars.dark.vars,
          '--rd-button-elevation-y': '1px',
        },
      },
    },
  },
]);

// Variant: accent
const accentVars = assignTokensToVars('button', 'windows' as any, {
  fill: 'fill_color.accent.default',
  'fill-hover': 'fill_color.accent.secondary',
  'fill-active': 'fill_color.accent.tertiary',
  'fill-disabled': 'fill_color.accent.disabled',
  stroke: 'stroke_color.control_stroke.on accent default',
  'elevation-stroke': 'stroke_color.control_stroke.on accent secondary',
  // text
  text: 'fill_color.text_on_accent.primary',
  'text-active': 'fill_color.text_on_accent.secondary',
  'text-disabled': 'fill_color.text_on_accent.disabled',
});

export const buttonRecipe = recipe({
  base: {},

  variants: {
    variant: {
      default: {
        vars: {},
      },
      accent: {
        selectors: {
          [accentVars.dark.selector]: { vars: accentVars.dark.vars },
          [accentVars.light.selector]: { vars: accentVars.light.vars },
        },
      },
    },
  },
});
