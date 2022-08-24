import BasePage from "./BasePage";

class RegisterPage extends BasePage{

static get fillEmailForm(){
    return cy.get('#emailControl');
}

static get fillPasswordForm(){
    return cy.get('#passwordControl');
}

static get fillConfirmPasswordForm(){
    return cy.get('#repeatPasswordControl');
}

static get securityQSelect(){
    return cy.get('.mat-select-placeholder');
}

static get selectSecurityQ(){
    return cy.get(':nth-child(7)>.mat-option-text')
}

static get securityQAnswer(){
    return cy.get('#securityAnswerControl')
}

static get registerBtn(){
    return cy.get('#registerButton')
}


}

export default RegisterPage