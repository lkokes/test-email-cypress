import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('Navigate to login page', () => {
    cy.visit('https://user.centrum.sk/')
})

When('You agree with cookies', () => {
  cy.get('#onetrust-accept-btn-handler')
    .click()
})

Then('Login form is displayed', () => {
  cy.get('#content_rcol_wrap')
    .should('be.visible')
})

When('You enter a username and password', () => {
  cy.get('#ego_user')
    .type(Cypress.env('username'))
  
  cy.get('#ego_secret')
    .type(Cypress.env('password'), { log: false })
})

And('You click on login button', () => {
  cy.get('#ego_submit')
    .click()
})

Then('You should be logged in', () => {
  cy.get('.logo-brand')
    .should('be.visible')
})

Then('You can logout', () => {
  cy.logout()
})