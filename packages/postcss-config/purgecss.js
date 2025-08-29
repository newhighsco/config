const { plugins } = require('.')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    ...plugins,
    '@fullhuman/postcss-purgecss': {
      content: [
        './node_modules/@newhighsco/{chipset,press-start}/**/*.[j|t]s?(x)',
        './src/{components,layouts,pages}/**/*.[j|t]s?(x)'
      ],
      safelist: [/^:(global|export)/, 'html', 'body']
    }
  }
}
