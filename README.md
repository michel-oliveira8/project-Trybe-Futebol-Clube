# Projeto realizado durante curso na Trybe - Módulo de Back-end

# Habilidades

![Exemplo app front](./front-example.png)

O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

Nesse projeto, foi contruído **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento foi realizado **respeitando regras de negócio** providas no projeto e **sua API foi capaz de ser consumida por um front-end já provido nesse projeto**.

A aplicação desenvolvida foi capaz de regerenciar a serie A do campeonato __TFC - Trybe Futebol Clube__. Foram desenvolvidos alguns endpoints (seguindo os princípios **REST**) conectados ao banco de dados. Além disso, também foram aplicados os princípios **SOLID**!

---

## Desenvolvimento

Desenvolvido uma aplicação dockerizada em `Node.js + Typescript` usando o pacote `sequelize`.

## Instale as dependências
  * `npm install`

#### ⚠️ **Inicie seu `docker-compose` antes de testar localmente!** ⚠️
- Utilize os scripts de apoio `npm run compose:up` / `npm run compose:down`, para facilitar a execução do seu *compose*.

## Executando teste:

Para rodar testes de cobertura no back-end, utilize o comando: `cd app/backend && npm run test:coverage`
<br>
Para rodar testes que impementei no projeto, utilize o comando: `cd app/backend && npm test`







