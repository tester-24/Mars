/// <reference types="cypress"/>

import 'cypress-xpath';

describe.only('template spec', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  it('passes', () => {
    cy.viewport(1280, 720);
    cy.visit('https://space.jainam.in/#/?app=Mars&returnUrl=home');
    cy.wait(2000);

    // Case 1: No username and password
    cy.xpath('//p[text()="Login Now"]').click();
    cy.xpath('//div[contains(text(),"User ID is Required")]').should('be.visible');
    cy.xpath('//div[contains(text(),"Password is Required")]').should('be.visible');

    // Case 2: Invalid ID
    cy.xpath('//input[@placeholder="Enter User ID"]').type("1023236");
    cy.xpath('//input[@id="LoginPassword"]').type("Jainam@123");
    cy.xpath('//p[text()="Login Now"]').click();

    cy.xpath('//div[@aria-label="Invalid UserName or Password."]')
      .should('be.visible')
      .then(() => {
        cy.xpath('//input[@placeholder="Enter User ID"]').clear();
        cy.xpath('//input[@id="LoginPassword"]').clear();
      });

    // Case 3: Invalid Password
    cy.xpath('//input[@placeholder="Enter User ID"]').type("1126");
    cy.xpath('//input[@id="LoginPassword"]').type("Jainam@1234");
    cy.xpath('//p[text()="Login Now"]').click();

    cy.xpath('//div[@aria-label="2 of 3 attempts left"]')
      .should('be.visible')
      .then(() => {
        cy.xpath('//input[@id="LoginPassword"]').clear();
      });

    // Enter correct credentials
    cy.xpath('//input[@id="LoginPassword"]').type("Jainam@123");
    cy.xpath('//p[text()="Login Now"]').click();

    // Enter OTP
    cy.xpath('//input[@formcontrolname="otp1"]').type("1");
    cy.xpath('//input[@formcontrolname="otp2"]').type("2");
    cy.xpath('//input[@formcontrolname="otp3"]').type("3");
    cy.xpath('//input[@formcontrolname="otp4"]').type("4");

    cy.wait(5000);

   // cy.xpath('//a[normalize-space()="Dashboard"]').click();
   cy.xpath('//a[normalize-space()="Dashboard"]')
   .should('be.visible')
   .click();

    // Search Client
    cy.xpath('//input[@id="txtSearch"]').type("G1222");
    cy.xpath('(//button[@id="btnSearch"])[1]').click();

    cy.xpath('//a[normalize-space()="Marketplace"]')
   .should('be.visible')
   .click();

   cy.wait(5000);

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

//cy.wait(1000);
cy.xpath('//h5[contains(@class, "money_add") and contains(., "Min. Amount")]', { timeout: 8000 })
.should('exist')
.and('be.visible')

cy.xpath('(//li[@class="nav-item"])[4]').click();

cy.xpath('//div[@class="main-nav-lst-snd"]//a[@id="navbarDropdown"]').click();
cy.xpath('//label[normalize-space()="My Profile"]').click();

cy.xpath('//div[@class="info_wrap"]').within(() => {
  // Extract the name
  cy.get('h4.main_profile_name_wrap').invoke('text').then((name) => {
    cy.log('Name:', name); // Log the name
  });
cy.wait(5000);
  // Extract the ID
  cy.xpath("//h6[normalize-space()='1126 | Individual']")
  .should('be.visible') // Ensure the element is visible
  .invoke('text') // Extract the text content
  .then((text) => {
    cy.log('Extracted Text:', text); // Log the text to Cypress logs
    console.log('Extracted Text:', text); // Log the text to the browser console
  });
});
    });
  });
    