# postcss-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/postcss-config.svg)](https://www.npmjs.com/package/@newhighsco/postcss-config)

New High Score [shareable config](https://github.com/postcss/postcss#plugins) for [PostCSS](https://postcss.org/)

## Installation

Install `@newhighsco/postcss-config`:

```
yarn add -D @newhighsco/postcss-config postcss
```

## Usage
New High Score PostCSS rules come bundled in `@newhighsco/postcss-config`. To enable these rules, add a `postcss.config.js` at the root of your project. See the [PostCSS configuration docs](https://github.com/postcss/postcss#usage) for more details.

```javascript
// `postcss.config.js`
module.exports = require('@newhighsco/postcss-config');
```

### [PurgeCSS](https://purgecss.com/)

```javascript
// `postcss.config.js`
module.exports = require('@newhighsco/postcss-config/purgecss');
```

## [CHANGELOG](CHANGELOG.md)
