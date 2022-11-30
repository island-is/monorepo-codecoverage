module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true,
  "clean": true,
  "reporter": ["html", "text"],
  "include": [
    "**/*.ts",
  ],
  "exclude": [
    "**/*.spec.ts"
  ],
  // "skip-full": true,
  // 'excludeNodeModules': false,
  'temp-dir': "./coverage"
}
