const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
    ];
    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
