# commitlint-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/commitlint-config.svg)](https://www.npmjs.com/package/@newhighsco/commitlint-config)

New High Score [shareable config](https://commitlint.js.org/#/concepts-shareable-config) for [commitlint](https://commitlint.js.org/)

## Installation

Install `@newhighsco/commitlint-config`:

```
npm install --save-dev @commitlint/cli @newhighsco/commitlint-config
```

### Husky

`@newhighsco/commitlint-config` should be used in conjunction with [Husky](https://github.com/typicode/husky). See the [Husky installation guide](https://github.com/typicode/husky#install) for more details.

## Usage
New High Score commitlint rules come bundled in `@newhighsco/commitlint-config`. To enable these rules, add a `commitlint` property in your `package.json`. See the [commitlint configuration docs](https://commitlint.js.org/#/reference-configuration) for more details.

```json
"commitlint": {
  "extends": ["@newhighsco"]
}
```

Now you can run commitlint by adding the following scripts to your package.json.

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

## [CHANGELOG](CHANGELOG.md)
