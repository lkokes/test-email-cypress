Cypress.Commands.add("login", () => {
    cy.visit('https://user.centrum.sk/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#ego_user').type(Cypress.env('username'))
    cy.get('#ego_secret').type(Cypress.env('password'), { log: false })
    cy.get('#ego_submit').click()
});

Cypress.Commands.add("logout", () => {
  cy.get('#qa_logout_ju2').click()
})