import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {

    static get creditCardSelection(){
        return cy.get('.mat-cell.cdk-cell.cdk-column-Selection.mat-column-Selection.ng-star-inserted')
    
}

static get cardNumber(){
    return cy.get('.mat-cell.mat-cell.cdk-column-Number')
}

static clickRadioButton(digits) {
    return this.cardNumber
      .contains(digits)
      .parent()
      .find(".mat-radio-button.mat-radio-button")
      .click();
  }



}

export default PaymentOptionsPage