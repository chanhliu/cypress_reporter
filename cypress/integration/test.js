/// <reference types="Cypress" />

describe('Frist test suite', function()
{
    beforeEach(() => {
        // load example.json fixture file and store
        // in the test context object
        //cy.fixture('example.json').as('example')
    })

    it('PASSED', function() {
        expect(true).to.be.true

    })

    it('FAILED', function() {
        expect(true).to.be.false

    })

})