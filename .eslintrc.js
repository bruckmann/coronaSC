module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'react/no-unused-state': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'array-callback-return': 0,
    'max-len': 0,
    'import/extebsions': 0,
    'import/no-unresolved': 0,
  },
};
