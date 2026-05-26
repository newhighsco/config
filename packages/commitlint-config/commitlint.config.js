import { RuleConfigSeverity } from '@commitlint/types'

/** @type {import("@commitlint/types").UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: { 'header-max-length': [RuleConfigSeverity.Error, 'always', 72] }
}
