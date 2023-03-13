Feature: Sending email feature

    As a user of this email I should be able to send an email

    Scenario: Login into email
        Given Navigate to url
        When I agree with cookies
        Then Login form is displayed
        When I enter a username and password
        And I click on login button
        Then I should be able to login successfuly
        Then Click on logout button

    Scenario: Write and send the email
        Given Login into email
        When I click on write email button
        Then Email form is displayed
        Then Create an email message
        And I click on send button
        Then Click on logout button