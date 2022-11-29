export default {
  roots: ['<rootDir>/src'],

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/protocols/**',
    '!**/*-protocols.ts',
  ],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest',
  },
}
