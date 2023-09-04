# renovate-config

New High Score [shareable config](https://docs.renovatebot.com/config-presets/) for [Renovate](http://renovatebot.com/)

## Usage
New High Score Renovate rules are [available as an organization-level preset](https://github.com/newhighsco/.github/blob/main/renovate-config.json). To enable these rules, add a `renovate` property in your `package.json`. See the [Renovate configuration docs](https://docs.renovatebot.com/configuration-options/) for more details.

```json
"renovate": {
  "extends": ["local>newhighsco/.github:renovate-config"]
}
```
