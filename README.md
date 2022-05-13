# Projeto realizado durante curso na Trybe - Módulo de Back-end
# Data da entrega do projeto 01/04/2022

# Habilidades

![Exemplo app front](./front-example.png)

O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

No time de desenvolvimento do `TFC`, seu *squad* ficou responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que funcionem consumindo um banco de dados.

Nesse projeto, você vai construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento deve **respeitar regras de negócio** providas no projeto e **sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto**. Você será capaz de:

 - Realizar a dockerização dos apps, network, volume e compose;
 - Modelar dados com **MySQL** através do **Sequelize**;
 - Criar e associar tabelas usando `models` do `sequelize`;
 - Construir uma **API REST** com endpoints para consumir os models criados;
 - Fazer um `CRUD` utilizando `ORM`;

## O que deverá ser desenvolvido

Você vai arquitetar e desenvolver uma aplicação responsável pela serie A do campeonato __TFC - Trybe Futebol Clube__. Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios **REST**) que estarão conectados ao seu banco de dados. Lembre-se de aplicar os princípios **SOLID**!

O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

---

## Desenvolvimento

Você deve desenvolver uma aplicação dockerizada em `Node.js + Typescript` usando o pacote `sequelize`.

Para adicionar uma partida é necessário usuário e senha, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas `clubs` e `matchs` para fazermos as atualizações das partidas.

## Instale as dependências
  * `npm install`

## Executando teste:

Para rodar testes de cobertura no back-end, utilize o comando: `cd app/backend && npm run test:coverage`
<br>
Para rodar testes que impementei no projeto, utilize o comando: `cd app/backend && npm test`







