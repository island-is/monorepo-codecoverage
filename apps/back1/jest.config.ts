/* eslint-disable */
export default {
  displayName: 'back1',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  coverageReporters: ["json"],
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  // roots: ["<rootDir>", "<rootDir>/../../libs"],
  // collectCoverageFrom: [
  //   '/Users/petar/src/andes/customers/si/my-workspace/apps/**/*.{js,jsx}',
  //   '/Users/petar/src/andes/customers/si/my-workspace/libs/**/*.{js,jsx}',
  //   '!**/node_modules/**',
  //   '!**/vendor/**',
  // ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/back1',
};
