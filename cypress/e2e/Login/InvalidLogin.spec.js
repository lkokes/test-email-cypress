import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
        
Given('User navigates to login page centrum.sk', () => {
    cy.visit('https://user.centrum.sk/')
})

When('User agrees with cookies', () => {
  cy.get('#onetrust-accept-btn-handler')
    .click()
})

Then('Login form is displayed', () => {
  cy.get('#content_rcol_wrap')
    .should('be.visible')
})

When('User enters a valid username and incorrect password', () => {
  cy.get('#ego_user')
    .type(Cypress.env('username'))
  
  cy.get('#ego_secret')
    .type("invalidPassword")
})

And('User clicks on login button', () => {
  cy.get('#ego_submit')
    .click()
})

Then('User should see an error message', () => {
    cy.get('p > strong')
      .should('be.visible')
})