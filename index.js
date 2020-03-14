module.exports = {
  env: {
    jest: true
  },
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  plugins: ['json-format'],
  settings: {
    'json/sort-package-json': false
  }
}
