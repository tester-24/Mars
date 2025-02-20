/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('Dashboard Exited Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Dashboard Exited actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.wait(2000);
    cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();
    cy.wait(2000);

     // Search Client
     cy.xpath('//input[@id="txtSearch"]').type("J33");
     cy.xpath('(//button[@id="btnSearch"])[1]').click();
     cy.wait(5000);

    cy.xpath("//a[@id='Exit_Portfolio-tab']").click();

    cy.xpath('(//a[@title="See Order"])[2]').click();
    cy.wait(10000);

   // Click Dropdown menu
    cy.xpath("(//i[@class='fa fa-angle-down'])[1]").click();

   // View order details
    cy.xpath("(//a[@href='#SeeOrderModal'])[1]").click();
    cy.wait(10000);

    cy.xpath("//label[normalize-space()='Order Status']", { timeout: 10000 })
   .should('exist')
   .should('be.visible');

    cy.xpath("//div[@role='document']//span[@aria-hidden='true'][normalize-space()='×']").click();

});
});