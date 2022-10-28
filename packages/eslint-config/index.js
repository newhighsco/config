module.exports = {
  parserOptions: {
    requireConfigFile: false
  },
  env: {
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  plugins: ['json-format'],
  settings: {
    'json/json-with-comments-files': [],
    'json/sort-package-json': false
  },
  overrides: [
    // JSON
    { files: ['*.json'] },
    // Typescript
    {
      files: ['*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['tsc'],
      rules: {
        'tsc/config': [
          'error',
          {
            configFile: './tsconfig.json'
          }
        ],
        // Overrides standard-with-typescript
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow'
          }
        ],
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    },
    // React
    {
      files: ['*.{js,ts,md}x'],
      env: {
        browser: true
      },
      extends: [
        'standard-react',
        'standard-jsx',
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:mdx/recommended'
      ],
      rules: {
        // Overrides standard-react
        'jsx-quotes': ['error', 'prefer-double']
      }
    },
    // Storybook
    {
      files: ['**/*.stories.*'],
      extends: ['plugin:storybook/recommended', 'plugin:storybook/csf-strict'],
      rules: {
        'storybook/meta-inline-properties': 'error'
      }
    }
  ]
}
