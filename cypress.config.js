const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "j6sjyo",
  reporterOptions: {
   
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    enableCode:false,
    embeddedvideos: true,
    video: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      specPattern: 'cypress/e2e/**/*.cy.js';
      supportFile: 'cypress/support/commands.js';
    },
  },
});