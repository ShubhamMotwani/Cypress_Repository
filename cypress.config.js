//cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  projectId: "rpdoj7",
  defaultCommandTimeout: 15000,

  video: false,

  reporterOptions: {
    charts: true,

    reportPageTitle: "Cypress Inline Reporter",

    embeddedScreenshots: true,
    reportDir: "cypress/report",

    inlineAssets: true, //Adds the asserts inline
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
