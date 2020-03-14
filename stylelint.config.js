module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-standard',
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
        ignore: ['first-nested', 'after-comment'],
        ignoreAtRules: ['else']
      }
    ],

    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate'
  },
  syntax: 'scss'
}
