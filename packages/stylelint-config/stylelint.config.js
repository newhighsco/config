module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-css-modules'
  ],
  plugins: ['stylelint-order'],
  rules: {
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
