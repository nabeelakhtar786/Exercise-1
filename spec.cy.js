describe('Automation Task', () => {
 it('Add Package', ()=>{
  //logging-in
  cy.visit("https://ecspro-qa.kloudship.com")
  cy.get('#login-email').click().type("kloudship.qa.automation@mailinator.com")
  cy.get('#login-password').click().type("Password1")
  cy.get('#login-btn').click()
  cy.wait(2000)
  
  cy.get('.mat-card.mat-focus-indicator.count-card').eq(7).click()
  //adding package
cy.get('.mat-icon.notranslate.mat-tooltip-trigger.material-icons.mat-ligature-font.mat-icon-no-color').eq(1).click()
cy.get('#mat-input-2').click().type("Nabeel_Akhtar")
cy.get('#mat-input-3').click().clear().type("10")

cy.get('#mat-input-4').click().clear().type("2")

cy.get('#mat-input-5').click().clear().type("3")

cy.get('.mat-focus-indicator.mat-icon-button.mat-button-base.ng-star-inserted').eq(8).click()
cy.wait(3000)
//logging out 
cy.get('.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').eq(10).click()
  cy.get('.mat-focus-indicator.mat-menu-item.ng-tns-c99-1').eq(5).click()

// logging-in to check if the package is visible or not 
  cy.visit("https://ecspro-qa.kloudship.com")
  cy.get('#login-email').click().type("kloudship.qa.automation@mailinator.com")
  cy.get('#login-password').click().type("Password1")
  cy.get('#login-btn').click()
  cy.wait(2000)
  cy.get('.mat-card.mat-focus-indicator.count-card').eq(7).click()
  //checking the package 
  cy.get('div.padding.list-text').eq(0).should('be.visible').and('have.text'," Nabeel_Akhtar 10 x 2 x 3 ")
  cy.log("Package added successfully")

//logging out
  cy.get('.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').eq(10).click()
  cy.get('.mat-focus-indicator.mat-menu-item.ng-tns-c99-1').eq(5).click()
})

it('Delete Package', ()=>{
 cy.visit("https://ecspro-qa.kloudship.com")
 cy.get('#login-email').click().type("kloudship.qa.automation@mailinator.com")
 cy.get('#login-password').click().type("Password1")
 cy.get('#login-btn').click()
 cy.wait(2000)
 cy.get('.mat-card.mat-focus-indicator.count-card').eq(7).click()
 //deleting the package
 cy.get('.padding.list-text').eq(0).click()
 cy.get('.delete.ng-star-inserted').eq(0).click()
 

 cy.wait(2000)
 cy.get('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click()
 
 cy.get('div.padding.list-text').eq(0).contains("Nabeel_Akhtar").should('not.exist')
 cy.log("Package deleted successfully")
 // logging out 
 cy.get('.mat-icon.notranslate.material-icons.mat-ligature-font.mat-icon-no-color').eq(10).click()
 cy.get('.mat-focus-indicator.mat-menu-item.ng-tns-c99-1').eq(5).click()
 })
})


