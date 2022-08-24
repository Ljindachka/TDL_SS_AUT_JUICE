/// <reference types="cypress" />

import HomePage from "../pageObjects/homePage";
import LoginPage from "../pageObjects/LoginPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SearchPage from "../pageObjects/SearchPage";

// Scenario Login
describe ("Juice Shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.cookieButton.click();
  });

  it("Login actions", () => {
    // Click Account button
    HomePage.accountButton.click();
    // Click Login button
    HomePage.loginButton.click();
    // Set email value to "demo"
    HomePage.email.type("demo");
    // Set password value to "demo"
    HomePage.password.type("demo");
    // Click Log in
    HomePage.clickLogin.click();
    // Click Account button
    HomePage.clientAccount.click();
    // Validate that "demo" account name appears in the menu section
    HomePage.demo.should("contain", "demo");  
  });

  // Scenario Registration
  it.only("Registration", () => {
    //Click Account button
    HomePage.accountButton.click();
    // Click Login button
    HomePage.loginButton.click();
    // Click "Not yet a customer?"
    LoginPage.newCustomer.click();
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    const email =("email_"+(Math.floor(Math.random() * 1001))+"@ebox.com");
    RegistrationPage.email.type(email);
    // Fill in password field and repeat password field with same password
    const password =("paroliite");
    RegistrationPage.password.type(password);
    RegistrationPage.repeatPassword.type(password);
    // Click on Security Question menu
    RegistrationPage.securityQuestion.click();
    // Select "Name of your favorite pet?"
    RegistrationPage.selectQuestions.contains("Name of your favorite pet?").click();
    // Fill in answer
    RegistrationPage.answer.type("Marko");
    // Click Register button
    RegistrationPage.registerButton.click();
    // Set email value to previously created email
    LoginPage.email.type(email);
    // Set password value to previously used password value
    LoginPage.password.type(password);
    // Click login button
    LoginPage.loginButton.click();
    // Click Account button
    SearchPage.accountButton.click();
    // Validate that account name (with previously created email address) appears in the menu section
    SearchPage.userProfile.should("contain", email);
  });

  // Scenario - Search and validate Lemon
  it.only("Search and validate Lemon", () => {
    // Click on search icon
    SearchPage.searchIcon.click();
    // Search for Lemon
    SearchPage.searchField.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    SearchPage.selectLemon.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.cardInfo.should("contain", "Sour but full of vitamins.");
  })
  
});