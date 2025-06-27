import assert from 'assert'
import browserslist from 'browserslist'

import config from '../browserslist.config.js'

const browsers = browserslist(config)
const targets = [
  'and_chr',
  'and_ff',
  'chrome',
  'edge',
  'firefox',
  'ios_saf',
  'safari'
]
const coverage = browserslist.coverage(browsers)
const threshold = 85

targets.forEach(target => {
  assert(
    browsers.find(browser => browser.startsWith(target)),
    `Browserslist: target browser not found: ${target}`
  )
})

assert(
  coverage >= threshold,
  `Browserslist: coverage threshold (${threshold}%) not met: ${coverage}%`
)
