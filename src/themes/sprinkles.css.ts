import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { pseudo } from '../constants/styles';
import { windowsTheme, vars, macosTheme } from './theme.css';

const themeProperties = defineProperties({
  conditions: {
    base: {},
    windows: { selector: `.${windowsTheme.light} &, .${windowsTheme.dark} &` },
    macos: { selector: `.${macosTheme.light} &, .${macosTheme.dark} &` },
  },
  defaultCondition: 'base',
  properties: {
    // fontSize: colors,
    // border: colors,
  },
});

const pseudoProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: pseudo.hover },
    active: { selector: pseudo.active },
    focusVisible: { selector: pseudo.focusVisible },
  },
  defaultCondition: 'base',
  properties: {
    backgroundColor: vars.colors,
    color: vars.colors,
  },
  shorthands: {
    bgColor: ['backgroundColor'],
  },
});

const miscProperties = defineProperties({
  properties: {
    outline: {
      none: 'none',
      debug: '2px solid salmon',
    },
  },
});

export const sprinkles = createSprinkles(
  themeProperties,
  pseudoProperties,
  miscProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
