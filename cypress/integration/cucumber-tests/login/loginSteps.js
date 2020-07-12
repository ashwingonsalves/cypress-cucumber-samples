import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the login page', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
})

When('I submit valid login credentials', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.screenshot({capture: 'fullPage'})
})

When('I submit invalid login credentials', () => {
    cy.get('#username').type('invalid_usr')
    cy.get('#password').type('invalid_pass')
    cy.get('button[type="submit"]').click()
    cy.screenshot({capture: 'fullPage'})
})

Then('I should see success', () => {
    cy.get('.flash.success').should('be.visible')
})

Then('I should see failure', () => {
    cy.get('.flash.error').should('be.visible')
})