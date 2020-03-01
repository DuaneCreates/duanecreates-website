module.exports = {
  extends: 'stylelint-config-recommended-scss',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'screen'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'screen'],
      },
    ],
    'no-descending-specificity': null,
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'comment-empty-line-before': ['always'],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
