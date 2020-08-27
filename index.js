module.export = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 4,
                semi: true,
                trailingComma: 'all',
                singleQuote: true,
                jsxSingleQuote: false,
            },
        ],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'no-duplicate-imports': 'error',
        'no-nested-ternary': 'error',
        'no-useless-computed-key': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        // Forbid certain propTypes (any, array, object)
        'react/forbid-prop-types': ['error', {
          forbid: ['any', 'array', 'object'],
          checkContextTypes: true,
          checkChildContextTypes: true,
        }],
        // Prevent usage of .bind() in JSX props
        'react/jsx-no-bind': ['error', {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        }],
        'jsx-quotes': ['error', 'prefer-double'],
    },
}