import {SIGNIN} from '../locators'

class SignInPage{
    visit(){
        cy.visit('/')
    }

    typeEmail(email){
        cy.get(SIGNIN.EMAIL_INPUT)
            .type(email)
    }

    getValidationMessage(){
        return cy.get(SIGNIN.EMAIL_VALIDATION)
    }
}
 
export default SignInPage