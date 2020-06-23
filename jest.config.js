module.exports = {
    setupFiles: ['<rootDir>/setupTests.js'],
    transform: {
          "^.+\\.(js|jsx|ts)$": "babel-jest",
          ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
        }
};