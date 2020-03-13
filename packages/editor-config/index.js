#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const packageName = require('./package.json').name

const fileName = '.editorconfig'
const execSync = require('child_process').execSync
const source = path.join(__dirname, fileName)
const gitRoot = execSync('git rev-parse --show-toplevel')
  .toString()
  .trim()
const dest = path.join(gitRoot, fileName)

if (source === dest) {
  console.log(
    `${packageName}: Can't copy ${fileName} because source and destination are identical`
  )

  process.exit(0)
}

console.log(`${packageName}: Will create the ${fileName} file (${dest})`)

if (fs.existsSync(dest)) {
  console.log(`${packageName}: ${fileName} exists, deleting it.`)

  fs.unlinkSync(dest)
}

console.log(`${packageName}: Create the ${fileName} file.`)

const data = fs.readFileSync(source)

fs.writeFileSync(dest, data, { mode: 0o444 })
