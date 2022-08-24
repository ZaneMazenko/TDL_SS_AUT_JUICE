import BasePage from "./BasePage";

class OrderCompletionPage extends BasePage {

static get confirmMsg(){
    return cy.get('[fxflex="60%"] > :nth-child(1) > .confirmation')
}

}

export default OrderCompletionPage