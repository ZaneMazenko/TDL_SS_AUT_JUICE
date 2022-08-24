import BasePage from "./BasePage";

class SavedAddressesPage extends BasePage {

static get addAddress(){
    return cy.get('[aria-label="Add a new address"]')
}

static get checkAddress(){
    return cy.get('.mat-cell')
}

}

export default SavedAddressesPage