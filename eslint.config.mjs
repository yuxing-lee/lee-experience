// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
      rules: {
        'no-undef': 'error',
        'no-unused-vars': 'error',
        'no-console': 'warn',
      }
})
