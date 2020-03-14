module.exports = {
  env: {
    browser: true
  },
  extends: [
    '.',
    'standard-jsx',
    'standard-react',
    'prettier/react',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['jsx-a11y']
}
