# Mini Community


## Adicionar o Node
> `npm init`

## Adicionar as dependências do Sequelize e PostgreSQL
> `npm install sequelize pg`

ou
> `npm install sequelize`
> `npm install pg`

---
---

## Criar um Banco de Dados no PostgreSQL
- Dar um `create database miniCommunity`
  Isso é feito pelo próprio Sequelize, através do arquivo index.js, que busca os dados de autenticação e nome da tabela no arquivo db.js que está no diretório config

---

## Fazer conexão com o Banco
> `const Sequelize = require('sequelize');`
`const sequelize = new Sequelize('postgres://postgres@localhost:5432/miniCommunity', {dialect: 'postgres'});`
`module.exports = sequelize;`

---

## Criar os modulos que referenciam as tabelas do banco
Nessa fase, além de criar dois arquivos dentro da pasta modules, lá eu referenciei usando a dependencia do Sequelize, o que o próprio devia fazer ao criar a tabela referente a cada módulo, as colunas dessas tabelas, tipos de dados, e suas constraints, como PrimaryKey e ForeignKey

---

## Criação de rotas - **Express**

## Codar a Aplicação
### - CREATE

### - READ

### - UPDATE

### - DELETE
