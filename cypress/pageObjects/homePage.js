import Base from "./basePage";

class HomePage extends Base {
    static get url(){
        return "http://localhost:3000/#/"
    }

    static get dismissButton() {
        return cy.get(".mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted");
    }

    static get cookieButton() {
        return cy.get(".cc-btn.cc-dismiss");
    }

    static get accountButton() {
        return cy.get("#navbarAccount");
    }

    static get loginButton() {
        return cy.get("#mat-menu-panel-0");
    }

    static get email() {
        return cy.get("#email");
    }

    static get password() {
        return cy.get("#password");
    }

    static get clickLogin() {
        return cy.get("#loginButton");
    }

    static get clientAccount() {
        return cy.get("#navbarAccount");
    }

    static get demo() {
        return cy.get("[aria-label='Go to user profile']");
    }
}

export default HomePage;
