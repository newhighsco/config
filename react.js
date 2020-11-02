module.exports = {
  env: {
    browser: true
  },
  extends: [
    '.',
    'standard-react',
    'standard-jsx',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'plugin:mdx/recommended'
  ],
  rules: {
    // Overrides standard-react
    'jsx-quotes': ['error', 'prefer-double']
  }
}
