const assets = process.env.GH_ASSETS || process.env.GITHUB_ASSETS || []

/** @type {import('semantic-release').GlobalConfig} */
module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [{ type: 'test', release: 'patch' }]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/github', { assets }],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      { message: `chore(release): \${nextRelease.gitTag} [skip ci]` }
    ]
  ]
}
