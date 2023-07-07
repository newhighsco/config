# renovate-config [![Github release](https://img.shields.io/github/package-json/v/newhighsco/config?filename=packages%2Frenovate-config%2Fpackage.json)](https://github.com/newhighsco/config/releases?q=renovate-config)

New High Score [shareable config](https://docs.renovatebot.com/config-presets/) for [Renovate](http://renovatebot.com/)

## Usage
New High Score Renovate rules are configured in [`default.json`](default.json). To enable these rules, add a `renovate` property in your `package.json`. See the [Renovate configuration docs](https://docs.renovatebot.com/configuration-options/) for more details.

```json
"renovate": {
  "extends": ["github>newhighsco/config//packages/renovate-config/default"]
}
```

## [CHANGELOG](CHANGELOG.md)
