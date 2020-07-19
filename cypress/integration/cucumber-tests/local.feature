Feature: BrowserStack Local Testing

    Using BrowserStackLocal
    I should be able to access my local URL on BrowserStack

    Scenario: Navigate to local URL
        Given I visit the local URL
        Then I should see "Up and running"
