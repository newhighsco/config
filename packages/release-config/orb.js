const { branches, plugins } = require('.')

/** @type {import('semantic-release').GlobalConfig} */
module.exports = {
  branches,
  plugins: [
    ...plugins,
    [
      'semantic-release-circleci-orb',
      { orbName: 'newhighsco/orb', orbPath: 'dist/orb.yml' }
    ]
  ]
}
