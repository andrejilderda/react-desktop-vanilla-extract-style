import { createTheme, style } from '@vanilla-extract/css';
import { sprinkles } from '../../themes/sprinkles.css';
import { vars } from '../../themes/theme.css';
import { forTheme } from '../../utils/helpers';

export const buttonStyle = style([
  sprinkles({
    bgColor: {
      base: 'checkboxFill',
      focusVisible: 'checkboxFill',
      hover: 'checkboxFillActive',
    },
    color: {
      base: 'checkboxFillActive',
      focusVisible: 'checkboxFill',
      hover: 'checkboxFill',
    },
  }),
  {
    border: 'none',
    color: vars.colors.checkboxFill,
    padding: '10px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: 16,

    ...forTheme({
      windows: {
        background: 'orange',
        outline: '2px solid red',
        border: '3px solid purple',
      },
      macos: {
        background: 'green',
      },
    }),
  },
]);
