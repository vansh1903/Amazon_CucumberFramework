Feature: Add item to Wishlist

  Scenario Outline: As a user, I should be able to add and delete any item in the wishlist

    Given I am on the home page of Amazon Website
    When I search a product on Amazon
    And I add item to Wishlist
    Then I login to my Amazon Account
    And I successfully add item in my wishlist
    Then I check that the item is added or not
    And I view the wishlist
    And I delete the item added to the wishlist
    Then I check if the item is deleted or not