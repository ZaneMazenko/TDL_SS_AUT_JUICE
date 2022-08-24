import BasePage from "./BasePage";

class LoginPage extends BasePage {
    static get emailForm(){
        return cy.get('#email');
    }

    static get passwordForm(){
        return cy.get('#password');
    }

    static get loginBtn(){
        return cy.get('#loginButton');
    }

    static get notACustomerBtn(){
        return cy.get('#newCustomerLink > .primary-link');
    }

    
}

export default LoginPage