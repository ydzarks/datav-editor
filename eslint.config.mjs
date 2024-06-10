import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [],
    unocss: true,
    rules: {
      'no-console': 'warn',
    },
  },
  {
  },
)
