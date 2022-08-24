
import BasePage from "../pageObjects/BasePage";
import FirstPage from "../pageObjects/firstPage"
import LoginPage from "../pageObjects/loginPage";
import RegisterPage from "../pageObjects/registerPage";
import SearchPage from "../pageObjects/searchPage";

describe("examples", () => {
  context('Juice shop Login and Register', () => {
    beforeEach(() => {
      FirstPage.visit();
      FirstPage.dismissPopup.click();
      FirstPage.acceptCookies.click();
      BasePage.forceReloadBtn.click();
    });



    // Scenario - Login
    it('Scenario 1 - Login', () => {
      // Click Account button
      BasePage.accountButton.click();
       // Click Login button
      FirstPage.navigLogInButton.click();
      // Set email value to "demo"
      LoginPage.emailForm.click();
      LoginPage.emailForm.type('demo');
       // Set password value to "demo"
      LoginPage.passwordForm.click();
      LoginPage.passwordForm.type('demo');
      // Click Log in
      LoginPage.loginBtn.click();
      // Click Account button
      BasePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      SearchPage.verifyAccount.contains('demo');
    })

    // Scenario - Registration
    it('Scenario 2 - Registration', () => {
    // Click Account button
    BasePage.accountButton.click();
    // Login button
    FirstPage.navigLogInButton.click();
    // Click "Not yet a customer?"
    LoginPage.notACustomerBtn.click({force:true});
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    RegisterPage.fillEmailForm.click();
    let email = BasePage.randomEmailGenerator();
    RegisterPage.fillEmailForm.type(email);
    // Fill in password field and repeat password field with same password
    RegisterPage.fillPasswordForm.click();
    let password = 'parole123'
    RegisterPage.fillPasswordForm.type(password);
    RegisterPage.fillConfirmPasswordForm.click();
    RegisterPage.fillConfirmPasswordForm.type(password);
    // Click on Security Question menu
    RegisterPage.securityQSelect.click();
    // Select  "Name of your favorite pet?"
    RegisterPage.selectSecurityQ.click();
    // Fill in answer
    RegisterPage.securityQAnswer.click();
    RegisterPage.securityQAnswer.type('Blueberry');
    // Click Register button
    RegisterPage.registerBtn.click();
    // Set email value to previously created email
    LoginPage.emailForm.click();
    LoginPage.emailForm.type(email);
    // Set password value to previously used password value
    LoginPage.passwordForm.click();
    LoginPage.passwordForm.type(password);
    // Click login button
    LoginPage.loginBtn.click();
    // Click Account button
    SearchPage.accountButton.click();
    // Validate that account name (with previously created email address) appears in the menu section
    SearchPage.verifyAccount.contains(email);
    })
  })

  context('Juice shop functionality', () => {
    beforeEach(() => {
      FirstPage.visit();
      FirstPage.dismissPopup.click();
      FirstPage.acceptCookies.click();
      BasePage.forceReloadBtn.click();
      BasePage.accountButton.click();
      FirstPage.navigLogInButton.click();
      LoginPage.emailForm.click();
      LoginPage.emailForm.type('demo');
      LoginPage.passwordForm.click();
      LoginPage.passwordForm.type('demo');
      LoginPage.loginBtn.click();
    });

    // Scenario 3 - Search and validate Lemon
    it.only('search and validate Lemon', ()=>{
    // Click on search icon
    SearchPage.searchIcon.click();
    // Search for Lemon
    SearchPage.searchForm.type('Lemon{enter}');
    // Select a product card - Lemon Juice (500ml)
    SearchPage.gridList.contains('Lemon Juice (500ml)').click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.description.should('contain.text','Sour but full of vitamins')
    });


    it.only()




})
})
  


    
   
    
   
    
    