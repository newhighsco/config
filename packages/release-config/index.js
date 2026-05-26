const assets = (process.env.GH_ASSETS || process.env.GITHUB_ASSETS)
  ?.split(',')
  ?.filter(Boolean)
const preset = 'conventionalcommits'

/** @type {import('semantic-release').GlobalConfig} */
export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      { preset, releaseRules: [{ type: 'test', release: 'patch' }] }
    ],
    ['@semantic-release/release-notes-generator', { preset }],
    '@semantic-release/changelog',
    ['@semantic-release/github', { assets, assignees: ['benedfit'] }],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      { message: `chore(release): \${nextRelease.gitTag} [skip ci]` }
    ]
  ]
}
