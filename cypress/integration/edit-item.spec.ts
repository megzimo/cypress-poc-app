describe('Add Item', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/edit/3');
  });
  it('should load with each form field value equal to selected item', () => {
    const selectedItem = {
      product: 'blueberries',
      price: ' 3.29',
      category: 'produce',
      perishable: 'true',
      sale: 'false',
    };

    cy.get('input#prod').should('have.value', selectedItem.product);
    cy.get('input#price').should('have.value', selectedItem.price);
    cy.get('input#cat').should('have.value', selectedItem.category);
    cy.get('input#perish').should('have.value', selectedItem.perishable);
    cy.get('input#sale').should('have.value', selectedItem.sale);
  });

  it('should submit new form values on click', () => {
    cy.get('button').contains('Update').click();
  });

});
