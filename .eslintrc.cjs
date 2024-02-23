module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react'
    ],
    rules: {
        'multiline-ternary': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': ['error', 2]
    }
}
