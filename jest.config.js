module.exports = {
    setupFiles: ['<rootDir>/setupTests.js'],
    transform: {
          "^.+\\.(js|jsx|ts)$": "babel-jest",
          ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
        },
    collectCoverageFrom: [
      "**/src/**/*.jsx",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/cypress/**",
    ],
   testRegex: "(\\.|/)(test)\\.(js|jsx)$",
};
