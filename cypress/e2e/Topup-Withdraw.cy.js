/// <reference types="cypress"/>

import 'cypress-xpath';

describe.only('Topup-Withdraw', () => {
    before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  it('passes', () => {
    cy.viewport(1280, 720);
    cy.visit('https://mars.jainam.in/home');
    cy.wait(8000);
    cy.xpath("//button[@aria-label='Close']").click();

    cy.wait(10000);
    cy.xpath('/html/body/app-root/app-layout/div/app-maincontent/app-home/section/div/div[1]/div/div/div[2]/div[3]/a/span').click()

    cy.wait(8000);

    cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("m3903");
    cy.xpath("//button[normalize-space()='Continue']").click();
    cy.xpath("//input[@placeholder='Enter Password']").type("Nirav@789");
    cy.xpath("//button[normalize-space()='Continue']").click();

    // Enter OTP  
    cy.xpath("//input[@id='pin1']").type("1");
    cy.xpath("//input[@id='pin2']").type("2");
    cy.xpath("//input[@id='pin3']").type("3");
    cy.xpath("//input[@id='pin4']").type("4");
    cy.wait(10000);

    cy.xpath("//button[@aria-label='Close']").click();
    cy.wait(10000);

    cy.wait(5000);
    cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();
    cy.wait(8000);

    //Top-up
    cy.xpath("(//a[@title='Invest More'])[1]").click();
     cy.wait(8000);
     cy.xpath("//a[normalize-space()='Top Up']").click();
     cy.wait(8000);
     cy.xpath("//a[normalize-space()='Proceed']").click();
     cy.wait(8000);
     cy.xpath("//a[normalize-space()='Confirm']").click();
     cy.wait(8000);
     cy.xpath("//button[@class='close ord-success-btn']").click();
     cy.wait(8000);

     cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();
    cy.wait(8000);
    cy.xpath("(//a[@title='Performance'])[1]").click();
     cy.wait(8000);

     cy.xpath("(//button[normalize-space()='Withdrawal'])[1]")
     .should('be.visible')
     .click();

     cy.wait(5000);
     cy.xpath("//span[@class='k-icon k-i-x']").click();
     //Withdraw

    });
});
