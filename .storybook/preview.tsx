import { style } from '@vanilla-extract/css';
import React, { useState, Fragment } from 'react';
import {
  classNamePrefix,
  pseudoWrapperClassNames,
} from '../src/constants/styles';
import { macosTheme, windowsTheme, vars } from '../src/themes/theme.css';
import { storybookPreview } from './preview.css';

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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme/OS',
    defaultValue: 'windows',
    toolbar: {
      icon: 'browser',
      items: [
        {
          title: 'macOS',
          value: 'macos',
        },
        {
          title: 'Windows',
          value: 'windows',
        },
      ],
      showName: true,
    },
  },
  mode: {
    name: 'Mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: ['auto', 'light', 'dark', 'side-by-side', 'stacked'],
      showName: true,
    },
  },
  pseudo: {
    name: 'Pseudo',
    defaultValue: 'light',
    toolbar: {
      icon: 'contrast',
      items: ['default', 'hover', 'active', 'focus-visible', 'all'],
      showName: true,
    },
  },
};

const themes = {
  windows: windowsTheme,
  macos: macosTheme,
};

const StoryWrapper = ({
  story,
  pseudoState = 'default',
}: {
  story: React.ReactNode;
  pseudoState?: keyof typeof pseudoWrapperClassNames | 'all';
}) => {
  if (pseudoState === 'all') {
    return (
      <>
        <div className={pseudoWrapperClassNames['default']}>{story}</div>
        <div className={pseudoWrapperClassNames['hover']}>{story}</div>
        <div className={pseudoWrapperClassNames['active']}>{story}</div>
        <div className={pseudoWrapperClassNames['focusVisible']}>{story}</div>
      </>
    );
  }

  return <div className={pseudoWrapperClassNames[pseudoState]}>{story}</div>;
};

export const decorators = [
  (Story, context) => {
    const { theme, mode, pseudo } = context.globals;
    const activeTheme = themes[theme][mode];
    const lightTheme = themes[theme].light;
    const darkTheme = themes[theme].dark;
    const themeClassName = `${classNamePrefix}-${theme}`;

    if (mode === 'side-by-side' || mode === 'stacked')
      return (
        <div className={storybookPreview({ layout: mode })}>
          <div
            className={`${themeClassName} ${lightTheme}`}
            style={{ background: vars.colors.background }}
          >
            <StoryWrapper story={<Story />} pseudoState={pseudo} />
          </div>
          <div
            className={`${themeClassName} ${darkTheme}`}
            style={{ background: vars.colors.background }}
          >
            <StoryWrapper story={<Story />} pseudoState={pseudo} />
          </div>
        </div>
      );

    return (
      <div
        className={`${themeClassName} ${activeTheme} ${storybookPreview()} ${
          pseudoWrapperClassNames[pseudo]
        }`}
      >
        <StoryWrapper story={<Story />} pseudoState={pseudo} />
      </div>
    );
  },
];
