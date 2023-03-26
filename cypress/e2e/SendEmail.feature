Feature: Send email feature

    User is able to login, send email and logout from his account.

    Scenario: Logging in, sending an email and logging out
        Given User navigates to login page centrum.sk
        When User is logged into his account
        And User clicks on write email button
        Then Email form is displayed
        When User creates an email message
        And User clicks on send email button
        Then Email should be sent
        And User can logout