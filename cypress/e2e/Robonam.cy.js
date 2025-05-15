/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('Robonam Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Robonam actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.xpath("//a[normalize-space()='Robonam']").click();
    cy.xpath("//a[@class='common_anchor']//span").click();

    cy.xpath("//input[@placeholder='Enter your good name / client code']").type("Automation");
    cy.xpath("//a[normalize-space()='Next']").click();

    cy.xpath("//input[@placeholder='Enter your mobile no']").type("9778688756");
    cy.xpath("//a[normalize-space()='Next']").click();

    cy.xpath("//input[@placeholder='Enter your email address']").type("ashish.test.p@gmail.com");
    cy.xpath("//a[normalize-space()='Next']").click();

    cy.xpath("//input[@name='files']").click();

    const fileName = 'SampleFile.xlsx';
    cy.get('input[type="file"]').invoke('show').attachFile(fileName);
    cy.xpath("//span[normalize-space()='Upload']").click();
    cy.xpath("//h2[normalize-space()='Congratulations!']", { timeout: 10000 })
    .should('exist')
    .should('be.visible');
    cy.xpath("//div[@class='robonam_close']").click();
 
  });
});
