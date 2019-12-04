/* eslint-disable no-undef */

describe('Selecting an option should make an api call dependent on the option clicked', function() {
    it('Makes an api call when an option is clicked', function() {
        cy.visit('/');

        cy.get('select').select('home');
    });
});
