import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the login page', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
})

When('I submit valid login credentials', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
})

Then('I should see success', () => {
    cy.get('.flash.success').should('be.visible')
})