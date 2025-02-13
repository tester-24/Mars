/// <reference types="cypress"/>

import 'cypress-xpath';

describe.only('Single Page Flow', () => {
    before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  it('passes', () => {
    cy.viewport(1280, 720);
    cy.visit('https://mars.jainam.in/home');
    cy.wait(8000);
    cy.xpath('/html/body/app-root/app-layout/div/app-maincontent/app-home/section/div/div[1]/div/div/div[2]/div[3]/a/span').click()

    cy.wait(8000);

    cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("1056");
    cy.xpath("//button[normalize-space()='Continue']").click();
    cy.xpath("//input[@placeholder='Enter Password']").type("Nifty@16000");
    cy.xpath("//button[normalize-space()='Continue']").click();

    // Enter OTP  
    cy.xpath("//input[@id='pin1']").type("1");
    cy.xpath("//input[@id='pin2']").type("2");
    cy.xpath("//input[@id='pin3']").type("3");
    cy.xpath("//input[@id='pin4']").type("4");

    cy.wait(5000);

    //High Conviction Picks
    cy.xpath("//a[@class='nav-link py-3']").click();
     cy.wait(1000)
    cy.xpath("(//div[@class='stock_info ng-star-inserted'])[1]").click();
    cy.xpath("//div[@class='close_btn']").click();

    cy.xpath("(//div[@class='stock_info ng-star-inserted'])[18]").click();
    cy.xpath("//div[@class='close_btn']").click();

    cy.xpath("(//div[@class='stock_info ng-star-inserted'])[22]").click();
    cy.xpath("//div[@class='close_btn']").click();
    cy.wait(8000);

    //Robonam
    cy.xpath("//a[normalize-space()='Robonam']").click();
    cy.wait(10000);
    cy.xpath("//a[@class='common_anchor']//span").click();
    cy.wait(10000);

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
    cy.xpath("//div[@class='robonam_close']").click();

    cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();
 
     // Search Client
     cy.xpath('//input[@id="txtSearch"]').type("J33");
     cy.xpath('(//button[@id="btnSearch"])[1]').click();
     cy.wait(8000);

     cy.xpath('(//a[@title="See Order"])[2]').click();
     cy.wait(8000);

     cy.xpath("(//i[@class='fa fa-angle-down'])[1]").click();
     cy.xpath("(//a[@href='#SeeOrderModal'])[1]").click();
     cy.wait(8000);

     cy.xpath("//div[@role='document']//span[@aria-hidden='true'][normalize-space()='×']").click();
     cy.wait(8000);

     cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();

     cy.wait(8000);
     cy.xpath("(//a[@title='Invest More'])[1]").click({force:true});

     cy.xpath("(//a[@class='nav-link'])[10]").click();
    
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
    cy.wait(15000);
    cy.xpath("//img[@title='mars-jainam-piechart']").click({force:true});
    cy.wait(8000);
    //cy.xpath("//img[@title='mars-jainam-Factsheet']").click();
    cy.xpath("//img[@title='mars-jainam-News']").click();

    cy.xpath("//a[normalize-space()='Portfolios']").click();
    cy.wait(8000);
    cy.xpath("//a[@id='Advisory-tab']").click();
    cy.xpath("//a[@id='AIF-tab']").click();
    cy.xpath("//a[@id='Value Adder-tab']").click();
    cy.xpath("//a[@id='narnolia-tab']").click();
    
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
cy.wait(10000);

cy.xpath("//button[normalize-space()='Export to Excel']").click();
cy.wait(8000);

cy.xpath("(//button[@type='button'][normalize-space()='View'])[1]").click();

cy.xpath('//a[normalize-space()="Dashboard"]')
    .should('be.visible')
    .click();

cy.wait(8000);
/*
cy.xpath("(//a[@title='Invest More'])[2]").click();
cy.xpath("//a[normalize-space()='Top Up']").click();
cy.xpath("//a[normalize-space()='Proceed']").click();
cy.xpath("//a[normalize-space()='Confirm']").click();
*/

cy.xpath("(//a[@title='Performance'])[2]").click();
cy.wait(8000);

cy.window().then((win) => {
  cy.stub(win, 'open').callsFake((url) => {
    win.location.href = url;
  });
});
cy.wait(1000)
cy.xpath("//a[@title='PDF']").click({force:true});

cy.wait(2000)


// cy.xpath("//a[@title='PDF']")
// .invoke('removeAttr', 'target') // Force link to open in the same tab
// .click();

cy.go('back');
cy.xpath("//a[@title='Excel']").click();
cy.xpath("(//a[normalize-space()='Withdrawal'])").click();

/*
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
*/
    });
  });
    