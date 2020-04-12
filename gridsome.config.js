// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const StyleLintPlugin = require('stylelint-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'Duane Creates',
  siteUrl: 'https://duanecreates.com',
  titleTemplate: '%s ● Duane Creates',
  outputDir: 'public',
  icon: {
    favicon: null,
    touchicon: null,
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GRIDSOME_GA_ID,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/data/posts/**/*.md',
        typeName: 'Post',
        route: '/read/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/data/links/**/*.md',
        typeName: 'Link',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss,css}'],
      }),
    ],
  },
};
