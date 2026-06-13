

describe('Teste API Trello', () => {
  it('Valida status e exibe campo name da list', () => {
    cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
      .then((response) => {
        // valida o status code
        expect(response.status).to.eq(200);

        // acessa o campo "name" dentro da estrutura "list"
        const listName = response.body.data.list.name;
        cy.log('Nome da lista: ' + listName);

        // valida que o campo não está vazio
        expect(listName).to.not.be.empty;
      });
  });
});
