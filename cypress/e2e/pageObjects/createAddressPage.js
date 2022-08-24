import BasePage from "./BasePage";

class CreateAddressPage extends BasePage {

    static get countryFill(){
        return cy.get('#mat-input-3')
    }

    static get nameFill(){
        return cy.get('#mat-input-4')
    }

    static get phoneFill(){
        return cy.get('#mat-input-5')
    }

    static get zipCodeFill(){
        return cy.get('#mat-input-6')
    }

    static get addressFill(){
        return cy.get('#address')
    }

    static get cityFill(){
        return cy.get('#mat-input-8')
    }

}

export default CreateAddressPage