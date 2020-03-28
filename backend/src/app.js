const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app





/**
 * Rota é o caminho completo. localhost3000/users
 * Recurso é o que desejo acessar. /users *
 */
/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação  no back.
 * POST: Criar uma informação no back.
 * PUT: Alterar uma informação no back.
 * DELETE: Deletar uma informação no back.
 *
*/

/**
 * Tipos de parâmetros:
 * Query Parms: Parâmetros nomeados enviados na rota após o '?'. Servem para a filtros e paginação. Acessado pelo .query
 * Route Parms: Parâmetros utilizados para identificar recursos unicos. Serve para buscar um único usuário. Acessado pelo .params
 * Request Parms: Corpo da requisição, utilizado para criar ou alterar recursos.
 */
/**
 * Bancos de Dados:
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 *
 * Formas de se relacionar com o banco de dados:
 * Drivers: Comunicação do tipo : SELECT * FROM users.
 * Query Builder: Comunicação do tipo: table('users').select('*').where()
 */

/**
 * Teste de Integração: São testes que vão testar o fluxo inteiro da aplicação. Testa por completo uma funcionalidade do programa.
 * Teste Unitario: São teste que validam partes muito especificas do código/ projeto e que foram criados pelo próprio desenvolvedor.
 * 
 */

 /**
  * Deploy: 
  * Backend : 
  * Heroku para aplicação de pequeno porte
  * DigitalOcean para aplicações maiores/comerciais com um preço razoavel.
  * Amazom, Google  para aplicações muito robustas.
  * 
  * Frontend:
  * Netlify pazra aplicações de pequeno porte(expecifico front)
  * 
  * Mobile:
  * Publicação da aplicações na loja
  * 
  */

  /**
   * Estudos futuros:
   * Padrões de código: ESlint, Prettier...
   * Autenticação JWT
   * Styled Componnents
   */
