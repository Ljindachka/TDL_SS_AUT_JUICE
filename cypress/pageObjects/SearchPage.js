import Base from "./basePage";

class SearchPage extends Base {
    static get url() {
        return "http://localhost:3000/#/search"
    }

    static get accountButton() {
        return cy.get("#navbarAccount");
    }

    static get userProfile() {
        return cy.get("[aria-label='Go to user profile']");
    }

    static get searchIcon() {
        return cy.get("[aria-label='Click to search']");
    }

   static get searchField() {
    return cy.get("#mat-input-0");
   }

   static get selectLemon() {
    return cy.get(".mat-grid-tile.ng-star-inserted");
   }

   static get cardInfo() {
    return cy.get("mat-dialog-contain");
   }


}

export default SearchPage;