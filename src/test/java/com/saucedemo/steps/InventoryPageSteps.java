package com.saucedemo.steps;

import com.saucedemo.pages.InventoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;

public class InventoryPageSteps {

    @And("^I filter the products by Price \"([^\"]*)\"$")
    public void iFilterTheProductsByPrice(String filterBy){
        new InventoryPage().setFilterTheProductsByNameAndPrice("Price (high to low)");

    }

    @And("^I select cheapest & costliest products and add to basket$")
    public void iSelectCheapestCostliestProductsAndAddToBasket() {
        new InventoryPage().clickOnAddToCartButtonOfCostliestAndCheapestProduct();
    }

    @And("^I open shopping cart$")
    public void iOpenShoppingCart() {
        new InventoryPage().clickOnShoppingCart();
    }
}
