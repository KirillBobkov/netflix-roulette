describe('Input form', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/');
  });

  it('accepts input', () => {
    const typedText = 'Kill Bill';

    cy.get('.toolbar__input')
      .type(typedText)
      .should('have.value', typedText);
  });
});
