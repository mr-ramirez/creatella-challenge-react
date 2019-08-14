var path = require('path');

module.exports = {
  setupFiles: [
    path.resolve(__dirname, './src/setupTests.js'),
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/containers/**/*.{js,jsx}',
    'src/components/**/*.{js,jsx}',
    'src/helpers/**/*.{js,jsx}',
  ],
};