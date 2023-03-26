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

When('User enters valid username and valid password', () => {
  cy.get('#ego_user')
    .type(Cypress.env('username'))
  
  cy.get('#ego_secret')
    .type(Cypress.env('password'), { log: false })
})

And('User clicks on login button', () => {
  cy.get('#ego_submit')
    .click()
})

And('User should be logged in', () => {
  cy.get('.logo-brand')
    .should('be.visible')
})

And('User can logout', () => {
  cy.logout()
})