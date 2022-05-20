package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(id = "user-name")
    WebElement usernameField;

    @CacheLookup
    @FindBy(id = "password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "login-button")
    WebElement logInButton;


    public void enterUsernameToUsernameField(String username) {
        log.info("enter username '" + username+" ' to the username field " + usernameField.getText());
        sendTextToElement(usernameField, username);
    }

    public void enterPasswordToPasswordField(String password) {
        log.info("enter password ' " + password+ " ' to the password field" + passwordField.getText());
        sendTextToElement(passwordField, password);
    }

    public void clickOnLogInButton() {
        log.info("click on the log in button "+ logInButton.getText());
        clickOnElement(logInButton);
    }


}
