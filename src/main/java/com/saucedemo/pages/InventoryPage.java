package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class InventoryPage extends Utility {

    private static final Logger log = LogManager.getLogger(InventoryPage.class.getName());

    public InventoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@class='product_sort_container']")
    WebElement filterTheProductsByNameAndPrice;

    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn_primary btn_small btn_inventory']")
    List<WebElement> addToCartList;

    @CacheLookup
    @FindBy(xpath = "//a[@class='shopping_cart_link']")
    WebElement shoppingCart;


    public void setFilterTheProductsByNameAndPrice(String filterBy) {
        log.info("filter the product by price 'high to low' from the tab with list of options : "+ filterTheProductsByNameAndPrice.getText());
        selectByVisibleTextFromDropDown(filterTheProductsByNameAndPrice, filterBy);
    }

    public void clickOnAddToCartButtonOfCostliestAndCheapestProduct(){
        log.info(" click on costliest and cheapest product's add to cart buttons");
        addToCartList.get(0).click();
        addToCartList.get(addToCartList.size() -1).click();
    }

    public void clickOnShoppingCart(){
        log.info("click on shopping cart" + shoppingCart.getText());
        clickOnElement(shoppingCart);
    }

}



