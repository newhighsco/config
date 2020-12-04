const { plugins } = require('.')

module.exports = {
  plugins: {
    ...plugins,
    '@fullhuman/postcss-purgecss': {
      content: [
        './node_modules/@newhighsco/chipset/**/*.js?(x)',
        './src/{components,layouts,pages}/**/*.js?(x)'
      ],
      safelist: [/^:(global|export)/]
    }
  }
}
