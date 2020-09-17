describe('Add Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/add');
  });
  it('should add values to each input field', () => {
    const newItem = 'blueberries';
    const price = ' 3.29';
    const category = 'produce';
    const perishable = 'true';
    const sale = 'false';

    cy.get('input#prod').focus().type(newItem).should('have.value', newItem);
    cy.get('input#price').focus().type(price).should('have.value', price);
    cy.get('input#cat').focus().type(category).should('have.value', category);
    cy.get('input#perish').focus().type(perishable).should('have.value', perishable);
    cy.get('input#sale').focus().type(sale).should('have.value', sale);
  });

  it('should submit new form values on click', () => {
    cy.get('button').contains('Add Product').click();
  });

});
