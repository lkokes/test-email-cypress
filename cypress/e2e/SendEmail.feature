Feature: Send email feature

    You are able to login, send email and logout from your account.

    Scenario: Logging in, sending an email and logging out
        Given Navigate to login page
        When You are logged in
        Then You click on write email button
        Then Email form is displayed
        Then You create an email message
        And You click on send email button
        Then Email should be sent
        Then You can logout