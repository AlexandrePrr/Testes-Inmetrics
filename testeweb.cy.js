describe('Login', () => {
    it("fluxo de login", () => {
        cy.visit('https://www.automationexercise.com/login');

        cy.get('input[name="email"]').first().type('alpereira.ap19@gmail.com');
        cy.get('input[name="password"]').type('Teste123@');

        cy.contains("Login").click();
        cy.contains("Products").click();
        // campo de busca
        cy.get('#search_product').type('T-shirts');

        // botão de submit
        cy.get('#submit_search').click();

        // validação
        cy.contains("Searched Products").should("be.visible");

        //escolher produto
        cy.contains("2").click();
        cy.contains("Add to cart").click();
        //inserir no carrinho
        cy.contains("Cart").click();
        //ver no carrinho
        
    });
});


