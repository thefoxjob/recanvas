module.exports = {
  extends: ['@thirtyfox/eslint-config-react'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'scripts/**/*',
      ],
    }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
