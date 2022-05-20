$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by High to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User navigates to the saucedemo page and complete the item purchase",
  "description": "",
  "id": "search-functionality;user-navigates-to-the-saucedemo-page-and-complete-the-item-purchase",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I filter the products by Price \"high to low\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter details firstname \"\u003cfirstName\u003e\", lastName \"\u003clastName\u003e\" and zipPostalCode \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see message \u0027Thank you for your order\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-functionality;user-navigates-to-the-saucedemo-page-and-complete-the-item-purchase;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "zipCode"
      ],
      "line": 20,
      "id": "search-functionality;user-navigates-to-the-saucedemo-page-and-complete-the-item-purchase;;1"
    },
    {
      "cells": [
        "Angelina",
        "Jolie",
        "90038"
      ],
      "line": 21,
      "id": "search-functionality;user-navigates-to-the-saucedemo-page-and-complete-the-item-purchase;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4713273900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User navigates to the saucedemo page and complete the item purchase",
  "description": "",
  "id": "search-functionality;user-navigates-to-the-saucedemo-page-and-complete-the-item-purchase;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I filter the products by Price \"high to low\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter details firstname \"Angelina\", lastName \"Jolie\" and zipPostalCode \"90038\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see message \u0027Thank you for your order\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 180413801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "HomePageSteps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 338411500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 271220800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high to low",
      "offset": 32
    }
  ],
  "location": "InventoryPageSteps.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 287202200,
  "status": "passed"
});
formatter.match({
  "location": "InventoryPageSteps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 112439000,
  "status": "passed"
});
formatter.match({
  "location": "InventoryPageSteps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 95824600,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iGoToCheckout()"
});
formatter.result({
  "duration": 86945201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Angelina",
      "offset": 27
    },
    {
      "val": "Jolie",
      "offset": 48
    },
    {
      "val": "90038",
      "offset": 74
    }
  ],
  "location": "CheckOutSteps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 383156000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 97423100,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 108448599,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.iShouldBeAbleToSeeMessageThankYouForYourOrder()"
});
formatter.result({
  "duration": 43350201,
  "status": "passed"
});
formatter.after({
  "duration": 947848600,
  "status": "passed"
});
});