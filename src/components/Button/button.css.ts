import {
  createGlobalThemeContract,
  fallbackVar,
  style,
} from '@vanilla-extract/css';
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
    borderColor: c.border,
    backgroundColor: c.fill,
    color: c.text,
    content: c.borderDisabled,

    selectors: {
      '&[disabled]': {
        backgroundColor: fallbackVar(c.fillDisabled, c.fill),
        borderColor: fallbackVar(c.borderDisabled, c.border),
        color: fallbackVar(c.textDisabled, c.text),
      },

      '&:not([disabled])': {
        boxShadow:
          'inset 0px $$elevationY 0px 0px $$elevationStroke, inset 0px 0px 0px 1px $$stroke',
      },

      // hover
      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: fallbackVar(c.fillHover, c.fill),
        color: fallbackVar(c.textHover, c.text),
      },

      // active
      [`${pseudo.active}:not([disabled])`]: {
        backgroundColor: fallbackVar(c.fillActive, c.fill),
        color: fallbackVar(c.textActive, c.text),
        boxShadow: `inset 0px elevationY 0px 0px ${fallbackVar(
          c.elevationStrokeActive,
          c.elevationStroke,
        )}, inset 0px 0px 0px 1px ${fallbackVar(c.strokeActive, c.stroke)}`,
      },

      // windows
      // [c.strokeDisabled]: 'transparent',
      // borderRadius: '4px',
      // [c.elevationStrokeActive]: 'transparent',

      // windows color overrides
      ...assignVarsToTheme<typeof c>('windows', {
        [c.fill]: 'fill_color.control.default',
        [c.fillHover]: 'fill_color.control.secondary',
        [c.fillDisabled]: 'fill_color.accent.disabled',
        [c.fillActive]: 'fill_color.control.tertiary',

        // stroke
        [c.stroke]: 'stroke_color.control_stroke.default',
        [c.strokeActive]: 'stroke_color.control_stroke.default',

        // elevationStroke
        [c.elevationStroke]: 'stroke_color.control_stroke.secondary',

        // text
        [c.text]: 'fill_color.text.primary',
        [c.textActive]: 'fill_color.text.secondary',
        [c.textDisabled]: 'fill_color.text.disabled',
      }),

      // macos color overrides
      ...assignVarsToTheme<typeof colorVars>('macos', {
        [c.fill]: 'base.blue',
      }),
    },
  },
]);
