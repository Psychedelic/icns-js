/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

/**
 * Modified accroding to // https://stackoverflow.com/questions/66465339/how-to-make-ts-jest-work-with-import-export-syntax-of-the-js-files-that-are-bein
 */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: '<rootDir>/tests/custom-test-env.js',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src'],
  coveragePathIgnorePatterns: ['mocks'],
  transformIgnorePatterns: [
    'node_modules/(?!(module-that-needs-to-be-transformed)/)' 
  ],
  globals: {
    extensionsToTreatAsEsm: ['.ts', '.js'],
    'ts-jest': {
      useESM: true
    }
  },

};

