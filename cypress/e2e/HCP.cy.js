/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('HCP Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs HCP actions', () => {
    // Call the login function from login.cy.js
    login();

    // High Conviction Picks
    cy.xpath("//a[@class='nav-link py-3']").click();
    cy.xpath("(//div[@class='stock_info ng-star-inserted'])[1]").click();
    cy.wait(1000);
    cy.xpath("//div[@class='close_btn']").click();

    cy.xpath("(//div[@class='stock_info ng-star-inserted'])[18]").click();
    cy.wait(1000);
    cy.xpath("//div[@class='close_btn']").click();

    cy.xpath("(//div[@class='stock_info ng-star-inserted'])[22]").click();
    cy.wait(1000);
    cy.xpath("//div[@class='close_btn']").click();
  });
});