module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-css-modules'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else', 'value']
      }
    ],
    'media-feature-range-notation': 'prefix',
    'selector-class-pattern': null,
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
        ignoreProperties: [
          // Adds support for CSS Modules composes
          'composes'
        ]
      }
    ],
    'order/order': ['custom-properties', 'declarations', 'at-rules', 'rules']
  }
}
