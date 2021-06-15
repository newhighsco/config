#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const packageName = require('./package.json').name

const fileName = '.editorconfig'
const execSync = require('child_process').execSync
const source = path.join(__dirname, fileName)
let gitRoot

try {
  gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
} catch {
  process.exit(0)
}

const dest = path.join(gitRoot, fileName)

if (source === dest) {
  process.exit(0)
}

if (fs.existsSync(dest)) {
  fs.unlinkSync(dest)

  console.log(`${packageName}: Deleted existing ${fileName}`)
}

const data = fs.readFileSync(source)

fs.writeFileSync(dest, data, { mode: 0o444 })

console.log(`${packageName}: Created ${fileName}`)
