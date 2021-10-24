module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "object-curly-newline": 0,
    "no-console": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0
  },
};
