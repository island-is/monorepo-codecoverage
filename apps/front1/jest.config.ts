/* eslint-disable */
export default {
  preset: './jest.preset.js',
  rootDir: '../../',
  roots: [__dirname],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { root: __dirname, presets: ['@nrwl/next/babel'] }],
  },
  displayName: 'front1',
  coverageDirectory: '<rootDir>/coverage/apps/front1',
};
