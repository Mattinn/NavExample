describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('modules are collapsed by default', () => {
    cy.get('.selected a').should('not.contain', 'Home');
	});

	it('clicking the toggle icon expands the nav and reveals module names', () => {
    cy.get('#nav').click();
		cy.get('.selected a').should('contain', 'Home');
	});
});