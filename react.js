module.exports = {
  env: {
    browser: true
  },
  extends: [
    '.',
    'standard-react',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double']
  }
}
