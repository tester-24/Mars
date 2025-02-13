/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('Marketplace Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Marketplace actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.xpath('//a[normalize-space()="Marketplace"]')
    .should('be.visible')
    .click();
 
    //cy.wait(5000);

    //Alpha 11 click
    cy.xpath("//h4[normalize-space()='Alpha 11']").click();
 /*
    cy.get('h4.text-center.mt-2.dark-grey.mb-0.p-0.font-weight-bold.fix-hight-title')
    .each(($el) => {
        // Log each element's text content
        cy.log($el.text());
    })
    .then(($list) => {
     // Click the first element
     if ($list.length > 0) {
         cy.wrap($list[0]).click();
     } else {
         cy.log('No elements found to click');
     }
 });
 */
     cy.wait(15000);

     //Charts
     cy.xpath("//span[contains(text(),'6m')]").click();
     cy.wait(1000);
     cy.xpath("//span[@class='uppercase'][normalize-space()='1y']").click();
     cy.wait(1000);
     cy.xpath("//span[contains(text(),'3y')]").click();
     cy.wait(1000);
     cy.xpath("//span[contains(text(),'11y')]").click();
     cy.wait(1000);
 
     cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.wait(1000)

    cy.xpath("//i[@class='fa fa-telegram']").click();
    cy.xpath("//i[@class='fa fa-instagram']").click();
    cy.xpath("//i[@class='fa fa-facebook']").click();
    cy.xpath("//i[@class='fa fa-youtube']").click();
    cy.xpath("//i[@class='fa fa-pinterest']").click();
    cy.xpath("//i[@class='fa fa-twitter']").click();
 
     cy.xpath("//img[@title='mars-jainam-piechart']").click({force:true});
     cy.wait(8000);
     cy.xpath("//img[@title='mars-jainam-News']").click();
     cy.wait(8000);
     cy.xpath("//img[@title='mars-jainam-Factsheet']").click();
   
  });
});