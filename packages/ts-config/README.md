# ts-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/ts-config.svg)](https://www.npmjs.com/package/@newhighsco/ts-config)

New High Score [shareable config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for [TypeScript](https://www.typescriptlang.org/)

## Installation

Install `@newhighsco/ts-config`:

```
yarn add -D @newhighsco/ts-config
```

## Usage
New High Score Typescript rules come bundled in `@newhighsco/ts-config`. To enable these rules, add a `browserslist` property in your `package.json`. See the [Browserslist configuration docs](https://github.com/browserslist/browserslist#config-file) for more details.

```json
"browserslist": [
  "extends @newhighsco/browserslist-config"
]
```

## Usage
New High Score TypeScript rules come bundled in `@newhighsco/ts-config`. To enable these rules, add a `tsconfig.json` at the root of your project. See the [Typescript configuration docs](https://www.typescriptlang.org/tsconfig/) for more details.

```json
// `tsconfig.json`
{
  "extends": "@newhighsco/ts-config"
}
```

## [CHANGELOG](CHANGELOG.md)
