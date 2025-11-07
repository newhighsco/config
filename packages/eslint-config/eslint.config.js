import { existsSync } from 'node:fs'
import { join } from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import json from '@eslint/json'
import { defineConfig } from 'eslint/config'
import cypress from 'eslint-plugin-cypress'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import testingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'

const existsDependency = async name =>
  await import(name).then(() => true).catch(() => false)

const optionalDependency = async name =>
  await import(name)
    .then(({ default: plugin }) => plugin)
    .catch(() => undefined)

const legacy = new FlatCompat().config({
  overrides: [
    // Javascript
    {
      files: ['*.?(c|m)js'],
      extends: ['standard', 'plugin:prettier/recommended']
    },
    // Typescript
    (await existsDependency('typescript')) && {
      files: ['*.ts?(x)'],
      extends: ['love', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: false
      },
      rules: {
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }
        ],
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    },
    // React
    {
      files: ['*.{js,ts,md}x'],
      env: { browser: true },
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
    }
  ].filter(Boolean)
})

// console.log(111, JSON.stringify(legacy, null, 2))

const configs = [
  {
    ignores: ['!.github', '!.storybook'],
    languageOptions: { globals: { ...globals.jest } },
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },
  ...legacy,
  // JSON
  { files: ['**/*.json'], plugins: { json }, language: 'json/json' },
  { files: ['**/*.json'], ...prettierRecommended },
  { files: ['**/+(j|t)sconfig?(.*).json'], language: 'json/jsonc' },
  // Testing Library
  {
    files: ['**/*.spec.*'],
    ignores: ['**/*.spec.?(s)css'],
    ...testingLibrary.configs['flat/react'],
    rules: {
      ...testingLibrary.configs['flat/react'].rules,
      'testing-library/no-node-access': [
        'error',
        { allowContainerFirstChild: true }
      ]
    }
  },
  // Cypress
  { files: ['**/*.cy.*'], extends: [cypress.configs.recommended] }
]

// Storybook
if (await existsDependency('storybook')) {
  const storybook = await optionalDependency('eslint-plugin-storybook')

  configs.push(
    ...storybook.configs['flat/recommended'],
    ...storybook.configs['flat/csf-strict'],
    {
      files: ['**/*.stories.*'],
      rules: { 'storybook/meta-inline-properties': 'error' }
    }
  )
}

// .gitignore
const gitignore = join(process.cwd(), '.gitignore')

if (existsSync(gitignore)) {
  configs.push(includeIgnoreFile(gitignore))
}

export default defineConfig(configs)
