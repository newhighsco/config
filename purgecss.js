const { plugins } = require('.')

module.exports = {
  plugins: {
    ...plugins,
    '@fullhuman/postcss-purgecss': {
      content: ['./src/{components,layouts,pages}/**/*.js?(x)'],
      safelist: {
        deep: [/^:(global|export)/]
      }
    }
  }
}
