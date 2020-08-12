module.exports = {
  bail: true,
  setupFiles: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  collectCoverageFrom: [
    '**/src/**/*.(js|jsx|ts)',
    '!**/src/**/*index.(js|jsx|ts)',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/cypress/**',
  ],
  testRegex: '(\\.|/)(test)\\.(js|jsx)$',
};
