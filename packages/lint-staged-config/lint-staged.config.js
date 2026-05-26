/** @type {import('lint-staged').Configuration} */
export default {
  '*.{[j|t]s?(on|x),mdx}': 'eslint --fix',
  '*.?(s)css': 'stylelint --ignore-path .gitignore --fix',
  'renovate?(-config).json':
    'yarn dlx -p renovate renovate-config-validator --strict'
}
