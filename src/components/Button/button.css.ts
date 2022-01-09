import { assignVars, createTheme, style } from '@vanilla-extract/css';
import { pseudo } from '../../constants/styles';
import { sprinkles } from '../../themes/sprinkles.css';
import { vars } from '../../themes/theme.css';
import tokens from '../../themes/tokens';
import { composeVars, forTheme } from '../../utils/helpers';

export const buttonStyle = style([
  {
    all: 'unset',
    cursor: 'default',
    fontSize: '$2',
    lineHeight: '$2',
    padding: '6px $5',
    textAlign: 'center',
    userSelect: 'none',
    borderColor: '$$border',
    color: '$$text',

    selectors: {
      '&[disabled]': {
        backgroundColor: composeVars(['fillDisabled', 'fill']),
        borderColor: composeVars(['borderDisabled', 'border']),
        color: composeVars(['textDisabled', 'text']),
      },

      '&:not([disabled])': {
        boxShadow:
          'inset 0px $$elevationY 0px 0px $$elevationStroke, inset 0px 0px 0px 1px $$stroke',
      },

      [`${pseudo.hover}:not([disabled])`]: {
        backgroundColor: composeVars(['fillHover', 'fill']),
        color: composeVars(['textHover', 'text']),
      },

      [`${pseudo.active}:not([disabled])`]: {
        backgroundColor: composeVars(['fillActive', 'fill']),
        color: composeVars(['textActive', 'text']),
        boxShadow: `inset 0px elevationY 0px 0px ${composeVars([
          'elevationStrokeActive',
          'elevationStroke',
        ])}, inset 0px 0px 0px 1px ${composeVars(['strokeActive', 'stroke'])}`,
      },

      ...forTheme({
        windows: {
          vars: {
            [vars.colors.button_background]: 'orange',
          },
        },
        macos: {},
      }),
    },
  },
  sprinkles({
    bgColor: {
      base: 'button_background',
      focusVisible: 'button_background',
      hover: 'button_background',
    },
    color: {
      base: 'button_background',
      focusVisible: 'button_background',
      hover: 'button_background',
    },
  }),
]);
