class BasePage {

    static get url(){
        return ""
    }

    static visit(){
        cy.visit(this.url);
    }

    static get accountButton(){
        return cy.get('#navbarAccount')
    }

    static get forceReloadBtn(){
        return cy.get('.mat-simple-snackbar-action > .mat-focus-indicator')
    }

    static randomEmailGenerator(){
        let randomNum = Math.floor(Math.random()*100000);
        const email = `email_${randomNum}@email.com`
        return email;
    }

    static get submitBtn(){
        return cy.get('#submitButton')
    }
}


export default BasePage;