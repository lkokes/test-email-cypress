
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('User navigates to login page centrum.sk', () => {
  cy.visit('https://user.centrum.sk/')
})

When('User is logged into his account', () => {
  cy.login(Cypress.env('username'), Cypress.env('password'), { log: false });
})

And('User clicks on write email button', () => {
  cy.get('#compose_button')
    .click()
})

Then('Email form is displayed', () => {
  cy.get('.middle-column-inner')
    .should('be.visible')
})

When(`User adds the recipient's email address`, () => {
  cy.get('#smart_input_to')
    .click({ force: true })
    .type('lkokesova@gmail.com', { force: true })
})  
  
And('User adds a subject line', () => {
  cy.get('#subject_input')
    .type('cypress test')
})

And('User adds an email body', () => {
  cy.get('#mail_composer_body_ifr') 
    .then($frame => $frame[0].contentWindow) 
    .its('document.body')
    .within(() => {  
      cy.get('p')
        .type(' This is my cypress test !!! ')
    })
})

And('User clicks on send email button', () => {
  cy.get('#qa_email_send_bottom > .b-listing-green > .b-inner > .b-content')
    .click()
})

Then('Email should be sent', () => {
  cy.get('#systm_ram > .system-message > div > span')
    .should('have.text', 'Správa bola úspešne odoslaná.')
})

And('User can logout', () => {
  cy.logout()
})