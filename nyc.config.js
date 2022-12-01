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
  // "all": true,
  "clean": true,
  // "esModules": true,
  "reporter": ["html", "text", "json"],
  "include": [
    "**/*.ts",
    "dist/**/*.js"
  ],
  "exclude": [
    "**/*.spec.ts",
    "**/jest.config.ts",
    "**/*.d.ts"
  ],
  "instrument": true,
  // "skip-full": true,
  // 'excludeNodeModules': false,
  'temp-dir': "./coverage"
}
