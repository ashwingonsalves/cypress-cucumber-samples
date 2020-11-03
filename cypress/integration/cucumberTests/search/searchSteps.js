import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit DuckDuckGo', () => {
    cy.visit('https://duckduckgo.com/')
})

When('I enter a search term', () => {
    cy.get('#search_form_input_homepage').type('BrowserStack {enter}')
})

Then('I should see search results', () => {
    cy.title().should('contain','BrowserStack')
})