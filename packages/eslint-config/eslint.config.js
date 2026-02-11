import { includeIgnoreFile } from '@eslint/compat'
import javascript from '@eslint/js'
import json from '@eslint/json'
import { defineConfig } from 'eslint/config'
import cypress from 'eslint-plugin-cypress'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import testingLibrary from 'eslint-plugin-testing-library'
import { findUp } from 'find-up'
import globals from 'globals'

const existsDependency = async name =>
  await import(name).then(() => true).catch(() => false)

const optionalDependency = async name =>
  await import(name)
    .then(({ default: plugin }) => plugin)
    .catch(() => undefined)

let typescriptConfig = []

if (await existsDependency('typescript')) {
  const typescript = await optionalDependency('typescript-eslint')

  typescriptConfig = [
    typescript.configs.recommended,
    {
      files: ['**/*.ts?(x)'],
      rules: { '@typescript-eslint/consistent-type-imports': 'error' }
    },
    { files: ['**/*.ts?(x)'], ...prettierRecommended }
  ]
}

/** @type {import("@eslint/config-helpers").ConfigWithExtendsArray} */
const configs = [
  {
    ignores: ['.yarn', '!.github', '!.storybook'],
    languageOptions: {
      globals: { ...globals.jest },
      parserOptions: { warnOnUnsupportedTypeScriptVersion: false }
    },
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },
  // Typescript
  ...typescriptConfig,
  // Javascript
  {
    files: ['**/*.?(c|m)js'],
    ...javascript.configs.recommended,
    ...prettierRecommended,
    rules: { '@typescript-eslint/no-require-imports': 'off' }
  },
  // React
  {
    files: ['**/*.{js,ts}x'],
    ...reactHooks.configs.flat.recommended,
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { react, 'jsx-a11y': jsxA11y },
    rules: { 'jsx-quotes': ['error', 'prefer-double'] }
  },
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
].filter(Boolean)

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
const gitignore = await findUp('.gitignore')

if (!!gitignore) {
  configs.push(includeIgnoreFile(gitignore))
}

export default defineConfig(configs)
