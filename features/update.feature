Feature: Update Profile Name

  Scenario Outline: As a user, I can be able to change my profile name

    Given I am on the home page of Amazon
    When I navigate to Sign In page
    And I should be able to Login to my Amazon Account 
    When I go to User information
    And I go to edit name
    And I edit my name 
    Then I check that my name is edited or not
