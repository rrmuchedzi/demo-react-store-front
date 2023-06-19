module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', './eslint/frontend.js', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};