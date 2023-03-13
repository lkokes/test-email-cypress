import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('Navigate to url', () => {
    cy.visit('https://user.centrum.sk/')
})

When('I agree with cookies', () => {
    cy.get('#onetrust-accept-btn-handler')
      .click()
})

Then('Login form is displayed', () => {
    cy.get('#content_rcol_wrap')
})

When('I enter a username and password', () => {
    cy.get('#ego_user')
      .type(Cypress.env('username'))
    
    cy.get('#ego_secret')
      .type(Cypress.env('password'), { log: false })
})

And('I click on login button', () => {
    cy.get('#ego_submit')
      .click()
})

Then('I should be able to login successfuly', () => {
    cy.get('.logo-brand')
      .should('be.visible')
})