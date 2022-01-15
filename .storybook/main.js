const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const path = require('path');

// stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
module.exports = {
  stories: [
    '../packages/components/**/*.stories.mdx',
    '../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
    ];
    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
