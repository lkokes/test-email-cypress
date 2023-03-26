Feature: Login and logout feature

    Scenario: Successful login and logout
        Given User navigates to login page centrum.sk
        When User agrees with cookies
        Then Login form is displayed
        When User enters valid username and valid password
        And User clicks on login button
        And User should be logged in
        And User can logout

    Scenario: Invalid login
        Given User navigates to login page centrum.sk
        When User agrees with cookies
        Then Login form is displayed
        When User enters a valid username and incorrect password
        And User clicks on login button
        Then User should see an error message
