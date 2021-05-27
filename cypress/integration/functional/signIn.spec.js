/// <reference types="cypress"/>

import SignInPage from '../../support/pageobjects/SignInPage'

describe("Given Signin page is accessed", () => {
    const Page = new SignInPage()
    before(() => {
        Page.visit()
    })
    context("When a valid email address is typed", () => {
        it("CT-1: Should show the message Insert a valid email address", async () => {
            let actualMessage
            const expectedMessage = "Insert a valid email address."
            Page.typeEmail('mail.com')
            Page.getValidationMessage().then($el => {
                actualMessage = $el[0].innerText
                expect(actualMessage).to.be.equal(expectedMessage)
            })
        })
    })
})
