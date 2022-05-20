package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPage extends Utility {

    private static final Logger log = LogManager.getLogger(CheckOutPage.class.getName());

    public CheckOutPage(){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='first-name']")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='last-name']")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postal-code']")
    WebElement zipCodeField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='continue']")
    WebElement continueButton;

    @CacheLookup
    @FindBy(xpath = "//button[@id='finish']")
    WebElement finishButton;

    @CacheLookup
    @FindBy(css = ".complete-header")
    WebElement headerTextThankYou;

    public void enterFirstNameLastNameAndZipCode(String firstName, String lastName, String zipCode){
        log.info("enter firstname ' "+ firstName + " ' to the firstname field " + firstNameField.getText() + " enter lastname ' "+ lastName + " ' to the lastname field " + lastNameField.getText() + " enter zip code ' "+ zipCode+" ' to the zipCode field " + zipCodeField.getText());
        sendTextToElement(firstNameField,firstName);
        sendTextToElement(lastNameField,lastName);
        sendTextToElement(zipCodeField,zipCode);
    }

    public void clickOnContinueButton(){
        log.info("click on continue button");
        clickOnElement(continueButton);
    }

    public void clickOnFinishButton(){
        log.info("click on finish button");
        clickOnElement(finishButton);
    }

    public String getTextFromHeaderThankYou(){
        log.info(" get the text from header confirming order is placed " + headerTextThankYou.getText());
        return getTextFromElement(headerTextThankYou);
    }

}
