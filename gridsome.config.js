// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  siteName: 'Duane Creates',
  plugins: [],
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss,css}'],
      }),
    ],
  },
};
