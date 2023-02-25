module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'class-methods-use-this': 'off',
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-named-as-default': 'off',
    'max-classes-per-file': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
  },
};
