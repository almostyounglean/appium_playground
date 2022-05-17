const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',

  helpers: {
    Appium: {
      app: 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
      platform: 'Android',
      os_version: '9.0',
      port: 4444,
      host: 'hub-cloud.browserstack.com',
      user: 'sibedgeqagmailco1',
      key: '9HQpXqTuymjzHzMKzC4C',
      device: 'Google Pixel 3',
    },
  },

  plugins: {
    allure: {
      enabled: true,
      outputDir: './output',
    },
  },

  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'appium_playground',
};
