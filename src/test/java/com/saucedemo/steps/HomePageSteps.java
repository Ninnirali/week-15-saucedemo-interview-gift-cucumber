package com.saucedemo.steps;

import com.saucedemo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageSteps {
    @Given("^I am on saucedemo page$")
    public void iAmOnSaucedemoPage() {
    }

    @When("^I login with credential username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void iLoginWithCredentialUsernameAndPassword(String standard_user, String secret_sauce)  {
        new HomePage().enterUsernameToUsernameField(standard_user);
        new HomePage().enterPasswordToPasswordField(secret_sauce);

    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new HomePage().clickOnLogInButton();
    }
}
