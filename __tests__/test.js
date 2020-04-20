const execSync = require('child_process').execSync

var gitRoot

try {
  gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
} catch {
  process.exit(0)
}

console.log(gitRoot)

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://test.com',
    DISALLOW_ROBOTS: true
  },
  exportPathMap: defaultPathMap => {
    const customPathMap = { '/404.html': { page: '404' } }
    const pathMap = Object.assign(customPathMap, defaultPathMap)
    const ignorePaths = ['/404', '/index']

    ignorePaths.map(path => delete pathMap[path])

    return pathMap
  }
}

console.log(nextConfig)
