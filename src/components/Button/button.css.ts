import { createTheme, style } from '@vanilla-extract/css';
import { sprinkles } from '../../themes/sprinkles.css';
import { vars } from '../../themes/theme.css';

export const buttonStyle = style([
  sprinkles({
    background: {
      windows: 'blue',
      macos: 'red',
    },
    color: {
      hover: 'red',
    },
  }),
  {
    // backgroundColor: vars.colors.gray12,
    border: 'none',
    color: vars.colors.gray1,
    padding: '10px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: 16,
    outline: `2px solid ${vars.colors.sky9}`,
  },
]);
