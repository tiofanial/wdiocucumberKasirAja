@regression
Feature: KasirAja login Tests

    @all @negative
    Scenario: Verify login failed with invalid username
        Given I open KasirAja website
        When I login with invalid username
        Then I should see must be a valid email message

    @all @negative
    Scenario: Verify login failed with invalid password
        Given I open KasirAja website
        When I login with invalid password
        Then I should see an error message

    @all @positive @smoke
    Scenario: Login successfully with valid credentials
        Given I open KasirAja website
        When I login with valid credentials
        Then I should be on the dashboard homepage

