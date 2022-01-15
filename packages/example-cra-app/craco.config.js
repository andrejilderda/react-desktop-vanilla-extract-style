const path = require('path');
const fs = require('fs');
const cracoBabelLoader = require('craco-babel-loader');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

// Handle relative paths to sibling packages
const appDirectory = fs.realpathSync(process.cwd());
const resolvePackage = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin',
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
  plugins: [
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [resolvePackage('../components')],
      },
    },
  ],
};
