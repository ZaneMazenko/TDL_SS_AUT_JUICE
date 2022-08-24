
import BasePage from "../pageObjects/BasePage";
import BasketPage from "../pageObjects/basketPage";
import CreateAddressPage from "../pageObjects/createAddressPage";
import DeliveryMethodPage from "../pageObjects/deliveryMethodPage";
import FirstPage from "../pageObjects/firstPage"
import LoginPage from "../pageObjects/loginPage";
import OrderCompletionPage from "../pageObjects/orderCompletionPage";
import PaymentOptionsPage from "../pageObjects/paymentOptionsPage";
import RegisterPage from "../pageObjects/registerPage";
import SavedAddressesPage from "../pageObjects/savedAddressesPage";
import SearchPage from "../pageObjects/searchPage";
import SelectAddressPage from "../pageObjects/selectAddressPage";

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
    it('search and validate Lemon', ()=>{
    // Click on search icon
    SearchPage.searchIcon.click();
    // Search for Lemon
    SearchPage.searchForm.type('Lemon{enter}');
    // Select a product card - Lemon Juice (500ml)
    SearchPage.gridList.contains('Lemon Juice (500ml)').click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    SearchPage.description.should('contain.text','Sour but full of vitamins')
    });

    //Scenario 4 - Search 500ml and validate Lemon, while having multiple cards
    it('Search 500ml and validate Lemon', () => {
      // Click on search icon
      SearchPage.searchIcon.click();
       // Search for 500ml
      SearchPage.searchForm.type('500ml{enter}');
       // Select a product card - Lemon Juice (500ml)
      SearchPage.gridList.should('contain.text','Lemon Juice (500ml)')
      SearchPage.gridList.contains('Lemon Juice (500ml)').click();
      SearchPage.description.should('contain.text','Sour but full of vitamins');
    });

    // Scenario 5 - Search 500ml and validate cards
    it('Search 500ml and validate cards', () =>{
      // Click on search icon
      SearchPage.searchIcon.click();
      // Search for 500ml
      SearchPage.searchForm.type('500ml{enter}');
      // Select a product card - Eggfruit Juice (500ml)
      SearchPage.gridList.contains('Eggfruit Juice (500ml)').click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      SearchPage.description.should('contain.text','Now with even more exotic flavour');
      // Close the card
      SearchPage.closeBtn.click();
      // Select a product card - Lemon Juice (500ml)
      SearchPage.gridList.contains('Lemon Juice (500ml)').click();
      SearchPage.description.should('contain.text','Sour but full of vitamins');
       // Close the card
      SearchPage.closeBtn.click();
      // Select a product card - Strawberry Juice (500ml)
      SearchPage.gridList.contains('Strawberry Juice (500ml)').click();
       // Validate that the card (should) contains "Sweet & tasty!"
      SearchPage.description.should('contain.text','Sweet & tasty!');
    });

    // Scenario 6 - Add a review
    it('Add a review', () => {
    // Click on search icon
    SearchPage.searchIcon.click();
    // Search for Raspberry
    SearchPage.searchForm.type('Raspberry{enter}');
    // Select a product card - Raspberry Juice (1000ml)
    SearchPage.gridList.contains('Raspberry Juice (1000ml)').click();
    // Type in review - "Tastes like metal"
    SearchPage.reviewForm.click()
    SearchPage.reviewForm.type('Tastes like metal')
    // Click Submit
    BasePage.submitBtn.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    SearchPage.reviewListBtn.click();
    // Validate review -  "Tastes like metal"
    SearchPage.reviewList.contains('Tastes like metal')
    });

    // Scenario 7 - Validate product card amount
    it('Validate product card amount', ()=>{
    // Validate that the default amount of cards is 12
    SearchPage.gridList.should('have.length', 12);
    // Change items per page (at the bottom of page) to 24
    SearchPage.itemsInPageSlct.click();
    SearchPage.itemOptions.contains(24).click();
    // Validate that the amount of cards is 24
    SearchPage.gridList.should('have.length', 24);
    // Change items per page (at the bottom of page) to 36
    SearchPage.itemsInPageSlct.click();
    SearchPage.itemOptions.contains(36).click();
    // Validate that the amount of cards is 35
    SearchPage.gridList.should('have.length', 35);
    })

    // Scenario 8 - Buy Girlie T-shirt
    it('Buy Girlie T-Shirt', () =>{
    // Click on search icon
    SearchPage.searchIcon.click();
    // Search for Girlie
    SearchPage.searchForm.type('Girlie{enter}');
    // Add to basket "Girlie"
      SearchPage.addToCart.click();
    // Click on "Your Basket" button
      SearchPage.cartIcon.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
      BasePage.checkoutBtn.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
      SelectAddressPage.radioBtn.click();
    // Click Continue button
      SelectAddressPage.nextPageBtn.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
      DeliveryMethodPage.standardDelivery.click();
    // Click Continue button
      BasePage.nxtBtn.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
      PaymentOptionsPage.clickRadioButton(5678);
    // Click Continue button
      BasePage.nxtBtn.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
      BasePage.checkoutBtn.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.confirmMsg.should('have.text',"Thank you for your purchase!")
    })

    //Scenario 9 - Add address
    it.only('Add address', ()=> {
      // Click on Account
      BasePage.accountButton.click();
      // Click on Orders & Payment
      SearchPage.ordersAndPayments.click();
    // Click on My saved addresses
      SearchPage.savedAddreses.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
      SavedAddressesPage.addAddress.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
      CreateAddressPage.countryFill.click();
      CreateAddressPage.countryFill.type('Latvia');
      CreateAddressPage.nameFill.click();
      CreateAddressPage.nameFill.type('NameName');
      CreateAddressPage.phoneFill.click();
      CreateAddressPage.phoneFill.type(28475729);
      CreateAddressPage.zipCodeFill.click();
      CreateAddressPage.zipCodeFill.type('LV1010');
      CreateAddressPage.addressFill.click();
      CreateAddressPage.addressFill.type('This is Address');
      CreateAddressPage.cityFill.click();
      CreateAddressPage.cityFill.type("Riga baby");
    // Click Submit button
      BasePage.submitBtn.click();
    // Validate that previously added address is visible
      SavedAddressesPage.checkAddress.contains('NameName');
    })
  
  

    

  


  
  
  
  
  
  
  
 
 
  
 




  
  
 
 
  




})
})
  


    
   
    
   
    
    