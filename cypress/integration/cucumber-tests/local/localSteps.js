/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the local URL', () => {
    cy.visit('http://bs-local.com:45691/check')
})

Then('I should see {string}', body_text => {
    cy.get('body').eq(0).should('contain', body_text)
    cy.screenshot({capture: 'fullPage'})
})
