const babelConfig = require('@istanbuljs/nyc-config-babel');
// const hookRunInThisContextConfig = require('@istanbuljs/nyc-config-hook-run-in-this-context');
const typescript = require("@istanbuljs/nyc-config-typescript");
const { parserPlugins } = require('@istanbuljs/schema').defaults.nyc;

console.log(`Default plugins: ${parserPlugins}`)
console.log(`Typescript plugins: ${typescript.parserPlugins}`)
module.exports = {
  ...typescript,
  ...babelConfig,
  // "extends": "@istanbuljs/nyc-config-typescript",
  parserPlugins: parserPlugins.concat('typescript', 'decorators'),
  "all": true,
  "clean": true,
  "esModules": true,
  "reporter": ["html", "text", "json"],
  "include": [
    "**/*.{js,ts}",
    "jest.preset.js",
    "dist/**/*.{ts,js}"
  ],
  "exclude": [
    "**/*.spec.ts",
    // "**/*.config.{ts,js}",
    // "**/*.d.ts"
  ],
  // "extension": [],
  "instrument": false,
  // "skip-full": true,
  // 'excludeNodeModules': false,
  'temp-dir': "./coverage"
}
