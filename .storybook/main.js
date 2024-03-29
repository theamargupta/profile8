const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname, '..'), 'node_modules'],
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@/components': path.resolve(__dirname, '../components'),
          '@/layouts': path.resolve(__dirname, '../layouts'),
          '@/hooks': path.resolve(__dirname, '../utils/hooks'),
          '@/data': path.resolve(__dirname, '../data'),
          '@/services': path.resolve(__dirname, '../services'),
          '@/utils': path.resolve(__dirname, '../utils')
        }
      }
    };
  }
};
