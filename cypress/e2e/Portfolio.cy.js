/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('Portfolio Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Portfolio actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.xpath("//a[normalize-space()='Portfolios']").click();
    cy.wait(2000);
    cy.xpath("//a[@id='Advisory-tab']").click();
    cy.xpath("//a[@id='AIF-tab']").click();
    cy.xpath("//a[@id='Value Adder-tab']").click();
    cy.xpath("//a[@id='narnolia-tab']").click();
  });
});