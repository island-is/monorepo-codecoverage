/* eslint-disable */
export default {
  preset: './jest.preset.js',
  rootDir: '/Users/petar/src/andes/customers/si/my-workspace',
  roots: [__dirname],
  globals: {
    'ts-jest': {
      tsconfig: `${__dirname}/tsconfig.spec.json`,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  displayName: 'back1',
  coverageDirectory: '<rootDir>/coverage/apps/back1',
  // coverageProvider: 'v8',
  // collectCoverageFrom: [
  //   '<rootDir>/**/*.ts',
  //   // '/Users/petar/src/andes/customers/si/my-workspace/libs/**/*.ts',
  //   '!**/node_modules/**',
  //   '!**/vendor/**',
  // ],
};
