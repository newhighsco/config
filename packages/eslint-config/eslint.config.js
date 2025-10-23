import { existsSync } from 'node:fs'
import { join } from 'node:path'

import { includeIgnoreFile } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import json from '@eslint/json'
import { defineConfig } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

const gitignore = join(process.cwd(), '.gitignore')
const compat = new FlatCompat()
const ignore = existsSync(gitignore)
const typescript = await import('typescript')
  .then(() => true)
  .catch(() => false)

export default defineConfig(
  [
    ...compat.config({
      parserOptions: { requireConfigFile: false },
      env: { jest: true },
      ignorePatterns: ['!.github', '!.storybook'],
      plugins: ['simple-import-sort'],
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error'
      },
      overrides: [
        // Javascript
        {
          files: ['*.?(c|m)js'],
          extends: ['standard', 'plugin:prettier/recommended']
        },
        // Typescript
        typescript && {
          files: ['*.ts?(x)'],
          extends: ['love', 'plugin:prettier/recommended'],
          parserOptions: {
            project: './tsconfig.json',
            warnOnUnsupportedTypeScriptVersion: false
          },
          plugins: ['tsc'],
          rules: {
            'tsc/config': ['error', { configFile: './tsconfig.json' }],
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
        },
        // Storybook
        {
          files: ['*.stories.*'],
          extends: [
            'plugin:storybook/recommended',
            'plugin:storybook/csf-strict'
          ],
          rules: { 'storybook/meta-inline-properties': 'error' }
        },
        // Testing Library
        {
          files: ['*.spec.*'],
          extends: ['plugin:testing-library/react'],
          rules: {
            'testing-library/no-node-access': [
              'error',
              { allowContainerFirstChild: true }
            ]
          }
        },
        // Cypress
        { files: ['*.cy.*'], extends: ['plugin:cypress/recommended'] }
      ]
    }),
    // JSON
    { files: ['**/*.json'], plugins: { json }, language: 'json/json' },
    { files: ['**/*.json'], ...prettierRecommended },
    ignore && includeIgnoreFile(gitignore)
  ].filter(Boolean)
)
