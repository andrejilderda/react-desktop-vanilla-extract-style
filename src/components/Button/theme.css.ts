import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

const root = createGlobalTheme('#app', {
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
});

const colors = createThemeContract({
  gray1: null,
  gray2: null,
  gray3: null,
  gray4: null,
  gray5: null,
  gray6: null,
  gray7: null,
  gray8: null,
  gray9: null,
  gray10: null,
  gray11: null,
  gray12: null,

  sky1: null,
  sky2: null,
  sky3: null,
  sky4: null,
  sky5: null,
  sky6: null,
  sky7: null,
  sky8: null,
  sky9: null,
  sky10: null,
  sky11: null,
  sky12: null,

  primary: null,
  secondary: null,
  background: null,
  foreground: null,

  text: {
    normal: null,
    dimmed: null,
  },
});

export const lightTheme = createTheme(colors, {
  gray1: '#fcfcfc',
  gray2: '#f8f8f8',
  gray3: '#f3f3f3',
  gray4: '#ededed',
  gray5: '#e8e8e8',
  gray6: '#e2e2e2',
  gray7: '#dbdbdb',
  gray8: '#c7c7c7',
  gray9: '#8f8f8f',
  gray10: '#858585',
  gray11: '#6f6f6f',
  gray12: '#171717',

  sky1: '#f9feff',
  sky2: '#f1fcff',
  sky3: '#e4f9ff',
  sky4: '#d5f4fd',
  sky5: '#c1ecf9',
  sky6: '#a4dff1',
  sky7: '#79cfea',
  sky8: '#2ebde5',
  sky9: '#68ddfd',
  sky10: '#5fd4f4',
  sky11: '#0078a1',
  sky12: '#003242',

  primary: '#1E40AF',
  secondary: '#DB2777',
  background: '#EFF6FF',
  foreground: '#EFF6FF',

  text: {
    normal: '#1F2937',
    dimmed: '#6B7280',
  },
});

export const darkTheme = createTheme(colors, {
  gray1: '#161616',
  gray2: '#1c1c1c',
  gray3: '#232323',
  gray4: '#282828',
  gray5: '#2e2e2e',
  gray6: '#343434',
  gray7: '#3e3e3e',
  gray8: '#505050',
  gray9: '#707070',
  gray10: '#7e7e7e',
  gray11: '#a0a0a0',
  gray12: '#ededed',

  sky1: '#0c1820',
  sky2: '#071d2a',
  sky3: '#082636',
  sky4: '#082d41',
  sky5: '#08354c',
  sky6: '#083e59',
  sky7: '#064b6b',
  sky8: '#005d85',
  sky9: '#68ddfd',
  sky10: '#8ae8ff',
  sky11: '#2ec8ee',
  sky12: '#eaf8ff',

  primary: '#60A5FA',
  secondary: '#F472B6',
  background: '#1F2937',
  foreground: '#1F2937',

  text: {
    normal: '#F9FAFB',
    dimmed: '#D1D5DB',
  },
});

export const vars = { ...root, colors };
