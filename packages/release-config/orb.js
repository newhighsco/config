const { branches, plugins } = require('.')

/** @type {import('semantic-release').GlobalConfig} */
export default {
  branches,
  plugins: [
    ...plugins,
    [
      'semantic-release-circleci-orb',
      { orbName: 'newhighsco/orb', orbPath: 'dist/orb.yml' }
    ]
  ]
}
