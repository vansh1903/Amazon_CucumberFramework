Feature: Proceed to Checkout

  Scenario Outline: As a user, I can select an item and Proceed to Checkout

    Given I am on the home page of Amazon
    When I search a product on Amazon
    Then I check that all the items in search list are according to what I searched
    And I select the first item
    And I add that product to cart
    And I Proceed to Checkout
    Then I should be able to Login to my Amazon Account 