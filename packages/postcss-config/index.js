const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    postcssFlexbugsFixes(),
    postcssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    })
  ]
}
