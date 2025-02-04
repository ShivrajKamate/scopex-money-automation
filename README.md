# scopex-money-automation
{
  "name": "scopex-money-tests",
  "version": "1.0.0",
  "description": "Automated test scripts for the Scopex Money mobile application.",
  "main": "index.js",
  "scripts": {
    "test": "wdio run ./config/wdio.conf.js"
  },
  "dependencies": {
    "@wdio/appium-service": "^7.16.11",
    "@wdio/cli": "^7.16.11",
    "@wdio/local-runner": "^7.16.11",
    "@wdio/mocha-framework": "^7.16.11",
    "@wdio/spec-reporter": "^7.16.11",
    "webdriverio": "^7.16.11"
  },
  "author": "Shivraj Kamate",
  "license": "ISC"
}
