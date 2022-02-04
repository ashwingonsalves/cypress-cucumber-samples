Feature: Login to Web App

    As an invalid user
    I should not be able to login
    As a valid user
    I should be able to login

    Scenario: Invalid Login Credentials
        Given I visit the login page
        When I submit invalid login credentials
        Then I should see failure
    
    Scenario: Valid Login Credentials
        Given I visit the login page
        When I submit valid login credentials
        Then I should see success
