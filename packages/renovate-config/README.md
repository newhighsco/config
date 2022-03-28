# renovate-config [![NPM version](https://img.shields.io/npm/v/@newhighsco/renovate-config.svg)](https://www.npmjs.com/package/@newhighsco/renovate-config)

New High Score [shareable config](https://docs.renovatebot.com/config-presets/) for [Renovate](http://renovatebot.com/)

## Installation

Install `@newhighsco/renovate-config`:

```
npm install --save-dev @newhighsco/renovate-config
```

## Usage
New High Score Renovate rules come bundled in `@newhighsco/renovate-config`. To enable these rules, add a `renovate` property in your `package.json`. See the [Renovate configuration docs](https://docs.renovatebot.com/configuration-options/) for more details.

```json
"renovate": {
  "extends": ["@newhighsco"]
}
```

## [CHANGELOG](CHANGELOG.md)
