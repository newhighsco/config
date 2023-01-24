import { execSync } from 'child_process'

let gitRoot

try {
  gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
} catch {
  process.exit(0)
}

console.log(gitRoot)

const foo = { bar: true }
const fizz = foo?.bar

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://test.com',
    DISALLOW_ROBOTS: true,
    BUZZ: fizz
  },
  exportPathMap: defaultPathMap => {
    const customPathMap = { '/404.html': { page: '404' } }
    const pathMap = Object.assign(customPathMap, defaultPathMap)

    return pathMap
  }
}

console.log(nextConfig)

declare global {
  interface Window {
    Cypress: unknown
    QSI: unknown
  }
}

export type RootState = ReturnType<typeof nextConfig.exportPathMap>
export type AppDispatch = typeof nextConfig.exportPathMap

const KB = 1024
const UNITS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
const BYTES: Record<string, number> = UNITS.reduce((acc, v, i) => {
  acc[v] = Math.pow(KB, i)
  return acc
}, {})

export function bytes(number: number, unit: string): number {
  return BYTES[unit] * number
}

export function buzz(bool?: boolean): string | undefined {
  if (bool) {
    return 'buzz'
  }
}

export default {
  fizz: 'buzz'
} as Record<string, unknown>
