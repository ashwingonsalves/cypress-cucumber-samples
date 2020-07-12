Feature: Login to Web App

    As a valid user
    I should be able to login

    Scenario: Valid Login Credentials
        Given I visit the login page
        When I submit valid login credentials
        Then I should see success
