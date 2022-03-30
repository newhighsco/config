const { plugins } = require('.')

module.exports = {
  plugins: [
    ...plugins,
    [
      'semantic-release-circleci-orb',
      {
        orbName: 'newhighsco/orb',
        orbPath: 'dist/orb.yml'
      }
    ]
  ]
}
