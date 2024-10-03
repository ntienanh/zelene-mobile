// https://docs.expo.dev/guides/using-eslint/
// module.exports = {
//   extends: ['expo', 'prettier'],
//   plugins: ['prettier'],
//   rules: {
//     'prettier/prettier': 'warn',
//   },
// };

module.exports = {
  root: true,
  extends: [
    'universe/native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'expo',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    'react-native/react-native': true,
    'jest': true,
    'node': true
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': ['warn', {
      skip: ['Text']
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_'
    }],
    'prettier/prettier': ['error', {
      'endOfLine': 'auto'
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};