# lint-staged-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/lint-staged-config.svg)](https://www.npmjs.com/package/@newhighsco/lint-staged-config)

New High Score [shareable config](https://github.com/lint-staged/lint-staged#configuration) for [lint-staged](https://github.com/lint-staged/lint-staged)

## Installation

Install `@newhighsco/lint-staged-config`:

```
yarn add -D lint-staged @newhighsco/lint-staged-config
```

### Husky

`@newhighsco/lint-staged-config` should be used in conjunction with [Husky](https://github.com/typicode/husky). See the [Husky installation guide](https://github.com/typicode/husky#install) for more details.

## Usage

New High Score lint-staged rules come bundled in `@newhighsco/lint-staged-config`. To enable these rules, add a `lint-staged.config.js` at the root of your project. See the [lint-staged configuration docs](https://github.com/lint-staged/lint-staged#configuration) for more details.

```javascript
// `lint-staged.config.js`
import config from '@newhighsco/lint-staged-config'

export default config
```

## [CHANGELOG](CHANGELOG.md)
