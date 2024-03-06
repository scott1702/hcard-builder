describe('hCard Builder', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Doesn\'t render hcard fields with empty content', () => {
    // Main container should exist
    cy.get('.vcard').should('exist');

    // No fields should exist as we have not loaded content
    cy.get('.vcard .given-name').should('not.exist');
    cy.get('.vcard .family-name').should('not.exist');
    cy.get('.vcard .email').should('not.exist');
    cy.get('.vcard .tel').should('not.exist');
    cy.get('.vcard .street-address').should('not.exist');
    cy.get('.vcard .locality').should('not.exist');
    cy.get('.vcard .region').should('not.exist');
    cy.get('.vcard .postal-code').should('not.exist');
    cy.get('.vcard .country-name').should('not.exist');
  })

  it('Previews content entered into the form', () => {
    // Enter some content into the form
    cy.get('.field').contains('Given name').find('input').type('Sam');
    cy.get('.field').contains('Surname').find('input').type('Smith');
    cy.get('.field').contains('Email').find('input').type('sam.smith@designcrowd.com');
    cy.get('.field').contains('Phone').find('input').type('02 1234 5678');
    cy.get('.field').contains('House name or #').find('input').type('2');
    cy.get('.field').contains('Street').find('input').type('Hill St');
    cy.get('.field').contains('Suburb').find('input').type('Surry Hills');
    cy.get('.field').contains('State').find('input').type('NSW');
    cy.get('.field').contains('Postcode').find('input').type('2010');
    cy.get('.field').contains('Country').find('input').type('Australia');

    // Check that the preview has updated with the entered content as per the hCard spec
    cy.get('.vcard .given-name').should('have.text', 'Sam');
    cy.get('.vcard .family-name').should('have.text', 'Smith');
    cy.get('.vcard .fn').should('have.text', 'Sam Smith');
    cy.get('.vcard .email').should('have.text', 'sam.smith@designcrowd.com');
    cy.get('.vcard .tel').should('have.text', '02 1234 5678');
    cy.get('.vcard .street-address').should('have.text', '2 Hill St');
    cy.get('.vcard .locality').should('have.text', 'Surry Hills');
    cy.get('.vcard .region').should('have.text', 'NSW');
    cy.get('.vcard .postal-code').should('have.text', '2010');
    cy.get('.vcard .country-name').should('have.text', 'Australia');
  })
})
