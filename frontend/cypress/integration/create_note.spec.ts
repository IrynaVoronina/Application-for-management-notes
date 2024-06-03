export {};

describe("Create note", () => {
    it("should allow a user to create a new note", () => {
        cy.visit('http://localhost:3000/create');

        cy.get('input[name="title"]').type('Test note title');
        cy.get('input[name="content"]').type('This is the content of the test note.');
        cy.get('input[value="HIGH"]').check();

        cy.get('button[type="submit"]').click();


        cy.url().should('eq', 'http://localhost:3000/');

        cy.contains('Test note title');
    })
})