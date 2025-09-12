/// <reference types="cypress" />
import 'cypress-xpath';
import { login } from './Login1056.cy';

describe('Dashboard Tests', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('performs Dashboard actions', () => {
    // Call the login function from login.cy.js
    login();

    cy.wait(2000);
    cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();
    cy.wait(5000);

     // Search Client
     cy.xpath('//input[@id="txtSearch"]').type("J33");
     cy.xpath('(//button[@id="btnSearch"])[1]').click();
     cy.wait(10000);

    // See Order
    // MAY CHANGE IN FUTURE BELOW XPATH
     //cy.xpath('(//a[@title="See Order"])[2]').click();
    cy.xpath('//a[@title="See Order"]').click();
     cy.wait(10000);

    // Click Dropdown menu
     cy.xpath("(//i[@class='fa fa-angle-down'])[1]").click();

    // View order details
     cy.xpath("(//a[@href='#SeeOrderModal'])[1]").click();
     cy.xpath("//h5[@id='SeeOrderModal']",{ timeout: 10000 }).should('be.visible');
     //cy.wait(8000);

     cy.xpath("//label[normalize-space()='Order Status']", { timeout: 10000 })
    .should('exist')
    .should('be.visible');

     cy.xpath("//div[@role='document']//span[@aria-hidden='true'][normalize-space()='×']").click();
     cy.wait(10000);

     cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click({force:true});
     cy.wait(2000);

     // Invest more
     //cy.xpath("(//a[@title='Invest More'])[1]").click({force:true});

     //cy.xpath("(//a[@class='nav-link'])[10]").click();

     cy.wait(10000);
    // MAY CHANGE IN FUTURE BELOW XPATH
     //cy.xpath("(//a[@title='Invest More'])[2]").click();
     cy.xpath("//a[@title='Invest More']").click();
     cy.wait(10000);
     cy.xpath("//a[normalize-space()='Top Up']").click({force:true});
     cy.wait(10000);
     /*cy.xpath("//a[normalize-space()='Proceed']").click();
     cy.wait(8000);
     cy.xpath("//a[normalize-space()='Confirm']").click();
*/
     cy.xpath("//a[normalize-space()='Cancel']").click();
     cy.xpath('//a[normalize-space()="Dashboard"]')
     .should('be.visible')
     .click();
 
     cy.wait(10000);

    //Performance
    // cy.xpath("(//a[@title='Performance'])[2]").click();
    // cy.wait(80000);

     //cy.xpath("/html/body/app-root/app-layout/div/app-maincontent/app-performance/main/section/div/div[2]/div/div[1]/div[4]/div[1]/div[2]/div/a[3]")
     //.should('be.visible')
     //.click();
     //cy.wait(80000);

     cy.xpath("(//a[@title='Performance'])[1]").click();
     cy.wait(10000);
//MAY CHANGE IN FUTURE BELOW XPATH
    // cy.xpath("/html/body/app-root/app-layout/div/app-maincontent/app-pmsperformance/main/section/div/div[2]/div/div[1]/div[3]/div[1]/div[2]/div/button[1]")
    // .should('be.visible')
    // .click({force:true});
/*
     cy.xpath('//a[normalize-space()="Dashboard"]')
     .should('be.visible')
     .click();
     cy.wait(80000);

     cy.xpath("(//a[@title='Performance'])[1]").click();
     cy.wait(80000);

     cy.xpath("/html/body/app-root/app-layout/div/app-maincontent/app-pmsperformance/main/section/div/div[2]/div/div[1]/div[3]/div[1]/div[2]/div/button[1]")
     .should('be.visible')
     .click();
*/
    // MAY CHANGE IN FUTURE BELOW XPATH
    // cy.wait(2000);
    // cy.xpath("//span[@class='k-icon k-i-x']").click();

     // Excel download
     cy.xpath("//a[@title='Excel']").click({force:true});
     //cy.xpath("(//a[normalize-space()='Withdrawal'])").click();

     // Pdf download
     cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;
        });
      });
      cy.xpath("//a[@title='PDF']")
     .invoke('removeAttr', 'target') // Force link to open in the same tab
     .click({force:true});

     cy.go('back');

cy.wait(1000)
  });
});
