import BasePage from "./BasePage";

class DeliveryMethodPage extends BasePage {

    static get standardDelivery(){
        return cy.get(':nth-child(4) > .cdk-column-Selection')
    }

    // static get nextPgBtn(){
    //     return cy.get('.nextButton')
    // }
}

export default DeliveryMethodPage