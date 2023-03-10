/* eslint-disable */
export default {
  preset: './jest.preset.js',
  rootDir: '../../',
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
  displayName: 'lib1',
  coverageDirectory: '<rootDir>/coverage/libs/lib1',
};
