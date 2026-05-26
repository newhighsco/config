#!/usr/bin/env node
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { execSync } from 'child_process'

import packageJson from '../package.json' with { type: 'json' }

const { name } = packageJson
const __dirname = dirname(fileURLToPath(import.meta.url))
const fileName = '.husky/commit-msg'
const source = join(__dirname, fileName)
let gitRoot

try {
  gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
} catch {
  process.exit(0)
}

const dest = join(gitRoot, fileName)

if (source === dest) {
  process.exit(0)
}

if (existsSync(dest)) {
  unlinkSync(dest)

  console.log(`${name}: Deleted existing ${fileName}`)
}

const data = readFileSync(source)

writeFileSync(dest, data, { mode: 0o444 })

console.log(`${name}: Created ${fileName}`)
