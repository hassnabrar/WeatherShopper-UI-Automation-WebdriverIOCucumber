@TemperatureTest
Feature: The Scenario of selecting cheapest products based on temperature while checking cart and giving payment details
Scenario: As a user , I want to select the appropriate product
    Given User is on temperature page
    When  User reads temperature and selects the product 
    Then  User should be on the product page




Scenario: As a user , I want to select the cheapest products
    Given User is on product page
    When  User selects the cheapest products
    When  User clicks the cart button
    Then  User verifies the selected products on checkout page





Scenario Outline: As a user , I want to check my cart
    Given while user is on checkout page and clicks payment button
    When  User switches to iframe to enter details
    Then  User clicks the pay button and exits iframe



Scenario Outline: As a user , I want to check my payment status
    Given While user has already clicked on confirm payemt and is on confirmation page
    Then  User checks the status of payment 
