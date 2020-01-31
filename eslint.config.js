module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['jsx-a11y']
}
