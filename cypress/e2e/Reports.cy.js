/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('Reports Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Reports actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.xpath("//a[@id='ReportDropdown']").click();
    cy.wait(8000);
    //cy.xpath("//a[@id='ReportDropdown']").click();
    cy.xpath("//a[normalize-space()='Trade Response Report']").click();
    cy.wait(5000);

    // click on calender
  cy.xpath("(//kendo-dateinput//input[@class='k-input'])[1]")
  .click()
  .clear({ force: true })
  .type("01/01-2025", { force: true });

cy.xpath("(//kendo-dateinput//input[@class='k-input'])[2]")
.click()
.clear({ force: true })
.type("31/01-2025", { force: true });

cy.xpath("//button[@id='btnsearch']").click();
cy.wait(1000);

cy.xpath("//button[normalize-space()='Export to Excel']").click();
cy.wait(7000);

cy.xpath("(//button[@type='button'][normalize-space()='View'])[1]").click();
cy.xpath("//h3[normalize-space()='Trade Reponse Report']",{timeout:5000}).should('be.visible');

  });
});