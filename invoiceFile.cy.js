import 'cypress-file-upload'
describe("invoice file", () => {
    it('csv file', () => {


        cy.visit('https://csvdemomockappp.bundlewallet.com/');


    })

    it('Verify that the URL link should be accessible', () => {

        cy.visit('https://csvdemomockappp.bundlewallet.com/');
        cy.get('.lead').should('be.visible')

    });
    it('Verify that the screen displays a choose File upload button', () => {
        cy.visit('https://csvdemomockappp.bundlewallet.com/');
        cy.get('#statement-file').should('be.visible')
    });
    it('validate pass invoice file is active', () => {
        cy.visit('https://csvdemomockappp.bundlewallet.com/');
        cy.get('#statement-file').attachFile('test.csv');
        cy.get('.btn').click()
    })
    it('Verify the parsed content is displayed correctly on the interface', () => {
        cy.visit('https://csvdemomockappp.bundlewallet.com/');
        cy.get('[ng-view=""]').should('be.visible')


    });

    it('Verify that sample link is visible', () => {
        cy.visit('https://csvdemomockappp.bundlewallet.com/');
        cy.get('a').should('be.visible')
    })
        it('Verify the functionality of Download sample link on the web', () => {
            cy.visit('https://csvdemomockappp.bundlewallet.com/');
            cy.get('a').click

        })

})