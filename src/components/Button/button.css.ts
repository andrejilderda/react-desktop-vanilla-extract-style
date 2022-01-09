import {
  createGlobalThemeContract,
  fallbackVar,
  style,
} from '@vanilla-extract/css';
import { M } from 'ts-toolbelt';
import { classNamePrefix, pseudo } from '../../constants/styles';
import { assignVarsToTheme, composeVars } from '../../utils/helpers';

const colorVars = {
  border: 'button-border',
  borderDisabled: 'button-border-disabled',

  elevationStroke: 'button-elevation-stroke',
  elevationStrokeActive: 'button-elevation-stroke-active',

  fill: 'button-fill',
  fillActive: 'button-fill-active',
  fillHover: 'button-fill-hover',
  fillDisabled: 'button-fill-disabled',

  stroke: 'button-stroke',
  strokeActive: 'button-stroke-active',

  text: 'button-text',
  textActive: 'button-text-active',
  textHover: 'button-text-hover',
  textDisabled: 'button-text-disabled',

  fontSize: 'button-font-size',
} as const;

const constructClass = (_value: string | null, path: string[]) =>
  `${classNamePrefix}-button-${path.join('-').replace('.', '_')}`;

// contract for colorVars
const c = createGlobalThemeContract(colorVars, constructClass);
const local = createGlobalThemeContract(
  {
    fontSize: 'button-font-size',
    elevationY: 'button-elevation-y',
    elevationStroke: 'button-elevation-stroke',
    stroke: 'button-stroke',
  },
  constructClass,
);

export const buttonStyle = style([
  {
    all: 'unset',
    cursor: 'default',
    fontSize: local.fontSize,
    lineHeight: '$2',
    padding: '6px $5',
    textAlign: 'center',
    userSelect: 'none',
    borderColor: '$$border',
    backgroundColor: c.fill,
    color: c.text,
    content: c.borderDisabled,

    selectors: {
      '&[disabled]': {
        backgroundColor: fallbackVar(c.fill, c.fillDisabled),
        borderColor: composeVars([c.borderDisabled, 'border']),
        color: composeVars([c.textDisabled, 'text']),
      },

      '&:not([disabled])': {
        boxShadow:
          'inset 0px $$elevationY 0px 0px $$elevationStroke, inset 0px 0px 0px 1px $$stroke',
      },

      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: fallbackVar(c.fillHover, c.fill),
        color: fallbackVar(c.textHover, c.text),
      },

      [`${pseudo.active}:not([disabled])`]: {
        backgroundColor: composeVars(['fillActive', 'fill']),
        color: composeVars(['textActive', 'text']),
        boxShadow: `inset 0px elevationY 0px 0px ${composeVars([
          'elevationStrokeActive',
          'elevationStroke',
        ])}, inset 0px 0px 0px 1px ${composeVars(['strokeActive', 'stroke'])}`,
      },

      ...assignVarsToTheme<typeof c>('windows', {
        [c.fill]: 'fill_color.accent.default',
        [c.fillDisabled]: 'background.fill_color.smoke.default',
        [c.fillActive]: 'background.fill_color.smoke.default',
        [c.stroke]: 'fill_color.accent.default',
      }),

      ...assignVarsToTheme<typeof colorVars>('macos', {
        [c.fill]: 'base.blue',
      }),
    },
  },
]);
