# svgo-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/svgo-config.svg)](https://www.npmjs.com/package/@newhighsco/svgo-config)

New High Score [shareable config](https://github.com/svg/svgo#configuration) for [SVGO](https://github.com/svg/svgo)

## Installation

Install `@newhighsco/svgo-config`:

```
yarn add -D @newhighsco/svgo-config
```

## Usage
New High Score SVGO rules come bundled in `@newhighsco/svgo-config`. To enable these rules, add a `svgo.config.js` at the root of your project. See the [SVGO configuration docs](https://github.com/svg/svgo#configuration) for more details.

```javascript
// `svgo.config.js`
module.exports = require('@newhighsco/svgo-config');
```

## [CHANGELOG](CHANGELOG.md)
