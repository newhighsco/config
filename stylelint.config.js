module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-css-modules'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    // Adds support for SCSS @ rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // Format SCSS @if/@else statements
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless'],
        ignore: ['after-comment', 'first-nested'],
        ignoreAtRules: ['else']
      }
    ],
    'at-rule-name-space-after': 'always',
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // Adds support for CSS module composes
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: 'composes'
      }
    ]
  },
  syntax: 'scss'
}
