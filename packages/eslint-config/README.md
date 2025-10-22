# eslint-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/eslint-config.svg)](https://www.npmjs.com/package/@newhighsco/eslint-config)

New High Score [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/)

## Installation

Install ESLint and `@newhighsco/eslint-config`:

```
npm install --save-dev eslint @newhighsco/eslint-config
```

### Prettier

`@newhighsco/eslint-config` should be used in conjunction with [Prettier](https://prettier.io/). See the [`@newhighsco/prettier-config` installation guide](https://github.com/newhighsco/prettier-config#installation) for more details.

## Usage
New High Score ESLint rules come bundled in `@newhighsco/eslint-config`. To enable these rules, add an `eslint.config.js` at the root of your project. See the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring) for more details.

```javascript
// `eslint.config.js`
import config from '@newhighsco/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([{ extends: [config] }])
```

Now you can run ESLint by adding the following scripts to your `package.json`. See the [ESLint CLI docs](https://eslint.org/docs/user-guide/command-line-interface) for more details.

```json
"scripts": {
  "lint:js": "eslint --cache .",
  "format:js": "yarn lint:js --fix"
}
```

Lint it:

```
yarn lint:js
```

Format it:

```
yarn format:js
```

## [CHANGELOG](CHANGELOG.md)
