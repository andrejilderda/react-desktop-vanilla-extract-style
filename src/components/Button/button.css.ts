import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { M } from 'ts-toolbelt';
import { classNamePrefix, pseudo } from '../../constants/styles';
import { themes, vars } from '../../themes/theme.css';
import { assignVarsToTheme } from '../../utils/helpers';

// local var
const componentName = 'button';
const lvar = (variable: string, fallback?: string) => {
  const varName = (name: string) =>
    `--${classNamePrefix}-${componentName}-${name}`;
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
    fontSize: lvar('font-size'),
    lineHeight: lvar('line-height'),
    padding: lvar('padding'),
    textAlign: 'center',
    userSelect: 'none',
    borderColor: lvar('border'),
    backgroundColor: lvar('fill'),
    color: lvar('text'),

    selectors: {
      '&[disabled]': {
        backgroundColor: lvar('fill-disabled', 'fill'),
        borderColor: lvar('border-disabled', 'border'),
        color: lvar('text-disabled', 'text'),
      },

      '&:not([disabled])': {
        boxShadow: `inset 0px ${lvar('elevation-y')} 0px 0px ${lvar(
          'elevation-stroke',
        )}, inset 0px 0px 0px 1px ${lvar('stroke')}`,
      },

      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: lvar('fill-hover', 'fill'),
        color: lvar('text-hover', 'text'),
      },

      [`${pseudo.active}:not([disabled])`]: {
        backgroundColor: lvar('fill-active', 'fill'),
        color: lvar('text-active', 'text'),
        boxShadow: `inset 0px elevationY 0px 0px ${lvar(
          'elevation-stroke-active',
          'elevation-stroke',
        )}, inset 0px 0px 0px 1px ${lvar('stroke-active', 'stroke')}`,
      },

      // 'stroke-disabled': 'transparent',
      // $$elevationY: '-1px',
      // 'elevation-stroke-active': 'transparent',
      ...assignVarsToTheme('button', 'windows', {
        // fill
        fill: 'fill_color.control.default',
        'fill-hover': 'fill_color.control.secondary',
        'fill-disabled': 'fill_color.accent.disabled',
        'fill-active': 'fill_color.control.tertiary',

        // stroke
        stroke: 'stroke_color.control_stroke.default',
        'stroke-active': 'stroke_color.control_stroke.default',

        // elevationStroke
        'elevation-stroke': 'stroke_color.control_stroke.secondary',

        // text
        text: 'fill_color.text.primary',
        'text-active': 'fill_color.text.secondary',
        'text-disabled': 'fill_color.text.disabled',
      }),

      ...assignVarsToTheme('button', 'macos', {
        fill: 'base.blue',
      }),
    },
  },
]);

export const buttonRecipe = recipe({
  base: {},

  variants: {
    variant: {
      default: {
        vars: {},
      },
      accent: {
        selectors: {
          [`.${themes.windows.light} &, .${themes.windows.dark} &`]: {},
          ...assignVarsToTheme('button', 'windows' as any, {
            fill: 'fill_color.accent.default',
            'fill-hover': 'fill_color.accent.secondary',
            'fill-active': 'fill_color.accent.tertiary',
            'fill-disabled': 'fill_color.accent.disabled',
            stroke: 'stroke_color.control_stroke.on accent default',
            'elevation-stroke':
              'stroke_color.control_stroke.on accent secondary',
            // text
            text: 'fill_color.text_on_accent.primary',
            'text-active': 'fill_color.text_on_accent.secondary',
            'text-disabled': 'fill_color.text_on_accent.disabled',
          }),
        },
      },
    },
  },
});
