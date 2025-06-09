import 'cypress-xpath';

export const login = () => {
  cy.viewport(1280, 720);
  cy.visit('https://mars.jainam.in/home');
 // cy.wait(5000);
 // cy.xpath("//button[@aria-label='Close']").click();
  cy.wait(5000);
  cy.xpath('/html/body/app-root/app-layout/div/app-maincontent/app-home/section/div/div[1]/div/div/div[2]/div[3]/a/span').click();
  cy.wait(5000);

  cy.xpath("//input[@placeholder='Enter User Id / Mobile Number']").type("1126");
  cy.xpath("//button[normalize-space()='Continue']").click();
  cy.xpath("//input[@placeholder='Enter Password']").type("J@inam$789");
  cy.xpath("//button[normalize-space()='Continue']").click();

  // Enter OTP
  cy.xpath("//input[@id='pin1']").type("1");
  cy.xpath("//input[@id='pin2']").type("2");
  cy.xpath("//input[@id='pin3']").type("3");
  cy.xpath("//input[@id='pin4']").type("4");
  cy.wait(5000);
 // cy.xpath("//button[@aria-label='Close']").click();
 // cy.wait(5000);
};
