import Base from "./basePage";

class RegistrationPage extends Base {
    static get url(){
        return "http://localhost:3000/#/register"
    }

    static get email() {
        return cy.get("#emailControl");
    }

    static get password() {
        return cy.get("#passwordControl");
    }

    static get repeatPassword() {
        return cy.get("#repeatPasswordControl");
    }

    static get securityQuestion() {
        return cy.get("[name='securityQuestion']");
    }

    static get selectQuestions() {
        return cy.get("mat-option.mat-option");
    }

    static get answer() {
        return cy.get("#securityAnswerControl");
    }

    static get registerButton() {
        return cy.get("#registerButton");
    }
}

export default RegistrationPage;