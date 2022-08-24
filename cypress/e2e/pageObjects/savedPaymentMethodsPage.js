import BasePage from "./BasePage";

class SavedPaymentMethodsPage extends BasePage {

static get addNewCard(){
    return cy.get('#mat-expansion-panel-header-0')
}

static get nameField(){
    
}

}

export default SavedPaymentMethodsPage