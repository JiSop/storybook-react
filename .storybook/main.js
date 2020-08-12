module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs'
  ],
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('babel-loader'),
  //     options: {
  //       presets: [['react-app', { flow: false, typescript: true }]],
  //     },
  //   });
  //   config.resolve.extensions.push('.ts', '.tsx');
  //   return config;
  // }
};
