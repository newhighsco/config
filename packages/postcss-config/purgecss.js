const { plugins } = require('.')
const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    ...plugins,
    purgeCSSPlugin({
      content: [
        './node_modules/@newhighsco/{chipset,press-start}/**/*.[j|t]s?(x)',
        './src/{components,layouts,pages}/**/*.[j|t]s?(x)'
      ],
      safelist: [/^:(global|export)/, 'html', 'body']
    })
  ]
}
