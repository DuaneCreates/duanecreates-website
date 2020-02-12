module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier',
  ],
  plugins: ['gridsome'],
  rules: {
    'gridsome/format-query-block': 'warn',
    'gridsome/require-g-image-src': 'error',
    'gridsome/require-g-link-to': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-duplicate-case': 'error',
    'no-empty': 'warn',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-style': ['error', 'last'],
    'comma-spacing': ['error', { before: false, after: true }],
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    semi: ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-duplicate-imports': ['error', { includeExports: true }],
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
