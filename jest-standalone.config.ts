/* eslint-disable */
export default {
  displayName: 'back1',
  // preset: './jest.preset.js',
  resolver:"./resolver.js",
  globals: {
    'ts-jest': {
      tsconfig: 'apps/back1/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  coverageReporters: ["json", "text"],
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  rootDir: '/Users/petar/src/andes/customers/si/my-workspace',
  roots: ["/Users/petar/src/andes/customers/si/my-workspace/apps/back1"],
  // coverageProvider: 'v8',
  // collectCoverageFrom: [
  //   '<rootDir>/**/*.ts',
  //   // '/Users/petar/src/andes/customers/si/my-workspace/libs/**/*.ts',
  //   '!**/node_modules/**',
  //   '!**/vendor/**',
  // ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'coverage/apps/back1',
};
