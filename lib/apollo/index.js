const { ApolloServer } = require('apollo-server-koa')
const schema = require('./schema')
const dataSources = require('./datasources')
const context = require('./context')

const service = new ApolloServer({
  schema,
  dataSources,
  context
})
module.exports = service
