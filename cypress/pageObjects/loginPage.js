import Base from "./basePage";

class LoginPage extends Base {
    static get url(){
        return "http://localhost:3000/#/login"
    }

    static get newCustomer() {
        return cy.get("#newCustomerLink");
    }

    static get email() {
        return cy.get("#email");
    }

    static get password() {
        return cy.get("#password");
    }

    static get loginButton() {
        return cy.get("#loginButton");
    }
}

export default LoginPage;
