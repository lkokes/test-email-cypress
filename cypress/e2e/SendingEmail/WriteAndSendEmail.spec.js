
import {Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Login into email', () => {
  cy.login("luciakokesova", "kw4G*kdfFXj8aXL");
})

Then('I click on write email button', () => {
    cy.get('#compose_button')
      .click()
})

Then('Email form is displayed', () => {
  cy.get('.middle-column-inner')
    .should('be.visible')
})

Then('Create an email message', () => {
  //recipient
    cy.get('#smart_input_to')
      .click({force: true})
      .type('lkokesova@gmail.com')
  
  //subject
  cy.get('#subject_input')
    .type('cypress test')
  
  //email body
  cy.get('#mail_composer_body_ifr') 
      .then($frame => $frame[0].contentWindow) 
      .its('document.body')
      .within(() => {  
        cy.get('p')
          .type(' Toto je moj cypress test :) ')
      })
})

Then('I click on send button', () => {
    cy.get('#qa_email_send_bottom > .b-listing-green > .b-inner > .b-content')
      .click()
})

Then('Click on logout button', () => {
    cy.logout()
})
