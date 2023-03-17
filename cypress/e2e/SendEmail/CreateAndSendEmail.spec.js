
import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('Navigate to login page', () => {
  cy.visit('https://user.centrum.sk/')
})

When('You are logged in', () => {
  cy.login(Cypress.env('username'), Cypress.env('password'), { log: false });
})

Then('You click on write email button', () => {
  cy.get('#compose_button')
    .click()
})

Then('Email form is displayed', () => {
  cy.get('.middle-column-inner')
    .should('be.visible')
})

Then('You create an email message', () => {
  //add recipient
  cy.get('#smart_input_to')
    .click({force: true})
    .type('lkokesova@gmail.com', {force: true})
  
  //add subject
  cy.get('#subject_input')
    .type('cypress test')
  
  //add email body
  cy.get('#mail_composer_body_ifr') 
    .then($frame => $frame[0].contentWindow) 
    .its('document.body')
    .within(() => {  
      cy.get('p')
        .type(' This is my cypress test !!! ')
    })
})

And('You click on send email button', () => {
  cy.get('#qa_email_send_bottom > .b-listing-green > .b-inner > .b-content')
    .click()
})

Then('Email should be sent', () => {
  cy.get('#systm_ram > .system-message > div > span')
    .should('have.text', 'Správa bola úspešne odoslaná.')
})

Then('You can logout', () => {
  cy.logout()
})
