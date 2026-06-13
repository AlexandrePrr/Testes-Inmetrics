describe('Login', () => {
    it("fluxo de login", () => {
        cy.visit('https://www.automationexercise.com/login');

        cy.get('input[name="email"]').first().type('alpereira.ap19@gmail.com');
        cy.get('input[name="password"]').type('Teste123@');

        cy.contains("Login").click();

        //cy.contains("Logged in as").should("be.visible");
    });
});
