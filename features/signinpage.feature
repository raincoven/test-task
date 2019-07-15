Feature: Set of tests for homepage of BBC

  Feature file with simple positive and negative tests for BBC pages

  Scenario: #1 - Check that user can open BBC SignIn Page
    Given I Open BBC SignInPage
    Then I Verify BBC logo visible

  Scenario: #2 - Check that only BBC Homepage have BBC logo
    Given I Open Wrong Page
    Then I Verify BBC logo is missing

  Scenario: #3 - Check error messages appear when you leave username and password fields blank
    Given I Open BBC SignInPage
    Then I Click SignIn Button
    Then I See General Error Message
    Then I See Username Error Message
    Then I See Password Error Message

  Scenario: #4 - Check error message appear when you enter incorrect password
    Given I Open BBC SignInPage
    Then I Enter supertestuser1992@gmail.com into Username Field
    Then I Enter Passw0rd19231 into Password Field
    Then I Click SignIn Button
    Then I See Password Error Message

  Scenario: #5 - Register account without email verification
    Given I Open BBC SignInPage
    Then I Click Register Now Hyperlink
    Then I Click Over 13 Button
    Then I Enter 6 as Day 6 as Month 1999 as Year
    Then I Submit Form
    Then I Enter qasupertestemail1992@gmail.com as Username
    Then I Enter SuperQA3000 as Password
    Then I Submit Form
    Then I See No Thanks 