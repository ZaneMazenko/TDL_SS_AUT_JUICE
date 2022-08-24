import BasePage from "./BasePage";

class SelectAddressPage extends BasePage {

static get radioBtn(){
    return cy.get("[for='mat-radio-40-input']")
}

static get nextPageBtn(){
    return cy.get('.btn-next')
}


}

export default SelectAddressPage