Feature: Google Search

    Using Google
    I should be able to search for BrowserStack

    Scenario: 
        Given I visit Google
        When I enter a search term
        Then I should see search results