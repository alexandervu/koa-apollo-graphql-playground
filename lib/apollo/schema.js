const { makeExecutableSchema } = require('apollo-server-koa')
const joinSchemas = require('./util/joinSchemas')

/*
 * Import schemas
 */
const basic = require('./schemas/basic')
const book = require('./schemas/book')

/*
 * Join all schemas
 */
const schema = joinSchemas([
  basic,
  book
])

module.exports = makeExecutableSchema(schema)
