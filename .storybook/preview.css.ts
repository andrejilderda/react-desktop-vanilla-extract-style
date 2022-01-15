import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../packages/lib/themes/theme.css';

export const sideBySide = style({
  display: 'flex',
});

export const storybookPreview = recipe({
  base: {
    fontFamily: vars['font-family'].system,
    background: vars.colors.background,
    borderRadius: 6,
    display: 'flex',
    flex: 1,
  },

  variants: {
    layout: {
      'side-by-side': {},
      stacked: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});

globalStyle(`${storybookPreview()} > div`, {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});
