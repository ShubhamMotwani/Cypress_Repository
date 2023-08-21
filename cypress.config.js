const { defineConfig } = require("cypress");
//npx cypress run --record --key 05ee75f2-3eae-4532-9936-2cc1c8500df8
module.exports = defineConfig({
  projectId: "rpdoj7",
  defaultCommandTimeout: 15000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
