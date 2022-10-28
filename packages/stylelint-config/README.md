# stylelint-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/stylelint-config.svg)](https://www.npmjs.com/package/@newhighsco/stylelint-config)

New High Score [shareable config](https://stylelint.io/user-guide/configuration#extends) for [stylelint](https://stylelint.io/)

## Installation

Install stylelint and `@newhighsco/stylelint-config`:

```
yarn add -D stylelint @newhighsco/stylelint-config
```

### Prettier

`@newhighsco/eslint-config` should be used in conjunction with [Prettier](https://prettier.io/). See the [`@newhighsco/prettier-config` installation guide](https://github.com/newhighsco/prettier-config#installation) for more details.

## Usage
New High Score stylelint rules come bundled in `@newhighsco/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.

```json
"stylelint": {
  "extends": ["@newhighsco/stylelint-config"]
}
```

Now you can run stylelint by adding the following scripts to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.

```json
"scripts": {
  "lint:css": "stylelint --cache --ignore-path .gitignore '**/*.?(s)css'",
  "format:css": "yarn lint:css --fix"
}
```

Lint it:

```
yarn lint:css
```

Format it:

```
yarn format:css
```

## [CHANGELOG](CHANGELOG.md)
