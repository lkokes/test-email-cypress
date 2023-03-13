Feature: Login and logout feature

    Scenario: Successful login and logout
        Given Navigate to login page
        When You agree with cookies
        Then Login form is displayed
        When You enter a username and password
        And You click on login button
        Then You should be logged in
        Then You can logout

    Scenario: Invalid login
        Given Navigate to login page
        When You agree with cookies
        Then Login form is displayed
        When You enter a username and incorrect password
        And You click on login button
        Then You should see an error message
