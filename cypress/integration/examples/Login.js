//<reference types="Cypress" />;

describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.get("input[placeholder='Username']").type("Admin");
    // cy.get("input[placeholder='Password']").type("admin123");
    // cy.get("button[type='submit']").click();
   cy.visit(
      "https://www.google.com/"
    ); 
  });
});
