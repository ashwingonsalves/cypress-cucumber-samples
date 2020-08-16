import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit Google', () => {
    cy.visit('https://www.google.com')
})

When('I enter a search term', () => {
    cy.get('[name="q"]').type('BrowserStack {enter}')
})

Then('I should see search results', () => {
    cy.title().should('contain','BrowserStack')
})