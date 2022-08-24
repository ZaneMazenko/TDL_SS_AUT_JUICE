import BasePage from "./BasePage";

class SearchPage extends BasePage {

    static get verifyAccount(){
        return cy.get(':nth-child(1)>.mat-menu-content');
    }

    static get searchIcon(){
        return cy.get('.mat-search_icon-search');
    }

    static get searchForm(){
        return cy.get('#mat-input-0');
    }

    static get gridList(){
        return cy.get('.item-name');
    }

    static get description(){
        return cy.get('.mat-dialog-content');
    }

    static get closeBtn(){
        return cy.get('.close-dialog');
    }
}

export default SearchPage