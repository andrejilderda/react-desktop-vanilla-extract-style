import {
  createGlobalThemeContract,
  fallbackVar,
  style,
} from '@vanilla-extract/css';
import { M } from 'ts-toolbelt';
import { classNamePrefix, pseudo } from '../../constants/styles';
import { assignVarsToTheme, composeVars } from '../../utils/helpers';

// local var
const componentName = 'button';
const lvar = (variable: string, fallback?: string) =>
  `var(--${classNamePrefix}-${componentName}-${variable})`;

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

      ...assignVarsToTheme('button', 'windows', {
        fill: 'fill_color.accent.default',
        'fill-disabled': 'background.fill_color.smoke.default',
        'fill-active': 'background.fill_color.smoke.default',
        stroke: 'fill_color.accent.default',
      }),

      ...assignVarsToTheme('button', 'macos', {
        fill: 'base.blue',
      }),
    },
  },
]);
