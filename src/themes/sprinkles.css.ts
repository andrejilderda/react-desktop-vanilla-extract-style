import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const themeProperties = defineProperties({
  conditions: {
    none: {},
    macos: { selector: '.rd-macos &' },
    windows: { selector: '.rd-windows &' },
  },
  defaultCondition: 'none',
  properties: {
    background: ['red', 'blue'], // use theme contract eventually
  },
});

const pseudoProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'default',
  properties: {
    color: ['red', 'blue'],
  },
});

const colors = {
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  // etc.
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    textSize: colors,
    border: colors,
    // etc.
  },
});

export const sprinkles = createSprinkles(
  pseudoProperties,
  colorProperties,
  themeProperties,
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
