import BasePage from "./BasePage";

class SearchPage extends BasePage {

    static get verifyAccount(){
        return cy.get(':nth-child(1)>.mat-menu-content')
    }

}

export default SearchPage