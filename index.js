module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
  env: {
    jest: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['json-format'],
  settings: {
    'json/sort-package-json': false
  }
}
