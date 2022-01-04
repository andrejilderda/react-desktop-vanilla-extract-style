import { createTheme, style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const buttonStyle = style({
  backgroundColor: vars.colors.gray12,
  border: 'none',
  color: vars.colors.gray1,
  padding: '10px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: 16,
});
