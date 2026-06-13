# Testes-Inmetrics
Este projeto foi desenvolvido como parte de um processo seletivo, utilizando Cypress, Cucumber (BDD) e JavaScript para automatizar cenários de testes Web e API.

🚀 Tecnologias utilizadas
Linguagem: JavaScript

Framework de testes: Cypress

BDD: Cucumber (cypress-cucumber-preprocessor)

📦 Instalação do ambiente
Clonar o repositório

bash
git clone https://github.com/AlexandrePrr/Testes-Inmetrics.git
Testes-Inmetrics
Instalar dependências

bash
npm install
Abrir o Cypress

bash
npx cypress open
🧪 Execução dos testes
Testes Web
Os cenários automatizados incluem:

Login válido no site de testes

Realizar busca de produto

Incluir produto no carrinho

Validar produtos incluídos na tela de pagamento

Para executar:

bash
npx cypress run --spec "cypress/e2e/web/*.feature"
Testes API
O cenário automatizado envia um GET para a API do Trello:

Endpoint: https://api.trello.com/1/actions/592f11060f95a3d3d46a987a

Valida o status code da resposta

Exibe o conteúdo do campo name dentro da estrutura list

Para executar:

bash
npx cypress run --spec "cypress/e2e/api/*.feature"
📂 Estrutura do projeto
Código
📦 projeto-automacao
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e
 ┃ ┃ ┣ 📂 web
 ┃ ┃ ┃ ┗ login.feature
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┗ trello.feature
 ┃ ┣ 📂 support
 ┃ ┃ ┗ step_definitions
 ┃ ┃   ┣ loginSteps.js
 ┃ ┃   ┗ trelloSteps.js
 ┣ 📜 cypress.config.js
 ┣ 📜 package.json
 ┗ 📜 README.md
✅ Exemplo de cenário (API)
trello.feature

gherkin
Feature: Teste API Trello

  Scenario: Validar status e campo name da list
    Given que envio um GET para a API do Trello
    Then o status code deve ser 200
    And devo visualizar o campo name da estrutura list
trelloSteps.js

js
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que envio um GET para a API do Trello", () => {
  cy.request("GET", "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a")
    .then((res) => {
      response = res;
    });
});

Then("o status code deve ser 200", () => {
  expect(response.status).to.eq(200);
});

Then("devo visualizar o campo name da estrutura list", () => {
  const listName = response.body.data.list.name;
  cy.log("Nome da lista: " + listName);
  expect(listName).to.not.be.empty;
});
📖 Observações
Caso as URLs fornecidas não estejam disponíveis, utilize sites similares para os testes web.

O projeto foi estruturado para ser facilmente expandido com novos cenários.
