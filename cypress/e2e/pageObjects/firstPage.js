
import BasePage from "./BasePage";

class FirstPage extends BasePage {
    static get url(){
        return "http://localhost:3000/#/"
    }

    static get dismissPopup(){
        return cy.get('.close-dialog');
    }

    static get acceptCookies(){
        return cy.get('.cc-dismiss');
    }

    static get navigLogInButton(){
        return cy.get('#navbarLoginButton');
    }


    

}

export default FirstPage