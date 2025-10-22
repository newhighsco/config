import { defineConfig } from 'eslint/config'

import config from './index.js'

export default defineConfig([{ extends: [config] }])
