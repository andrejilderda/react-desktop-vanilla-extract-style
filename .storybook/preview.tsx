import { useState } from 'react';
import {
  lightTheme,
  darkTheme,
  storybookPreview,
} from '../src/themes/theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Docs', 'Getting Started', 'Components'],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const [theme, setTheme] = useState<'windows' | 'macos'>('windows');
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
      <div
        id="app"
        className={`rd-${theme} ${
          isDarkTheme ? darkTheme : lightTheme
        } ${storybookPreview}`}
      >
        <Story />
        <button onClick={() => setIsDarkTheme((currentValue) => !currentValue)}>
          Switch to {isDarkTheme ? 'light' : 'dark'} theme
        </button>
        <button
          onClick={() =>
            setTheme((currentTheme) =>
              currentTheme === 'windows' ? 'macos' : 'windows',
            )
          }
        >
          Switch to {theme === 'windows' ? 'macos' : 'windows'} theme
        </button>
      </div>
    );
  },
];
