// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: false,
  testMatch: ['**/src/**/*.spec.+(ts|js)'],
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
};
