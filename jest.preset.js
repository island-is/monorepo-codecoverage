const nxPreset = require('@nrwl/jest/preset').default;

module.exports = { ...nxPreset,
  resolver:"<rootDir>/resolver.js",
  coverageReporters: ["json", "text"],
};
