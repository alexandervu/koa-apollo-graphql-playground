/**
 * API
 * @author Alexander Vu
 */
const http = require('http')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { execute, subscribe } = require('graphql')
const getPort = require('get-port')
require('dotenv').config()
const serverApp = require('./lib/server')
const { log } = require('./lib/log')
const apolloService = require('./lib/apollo')
const schema = require('./lib/apollo/schema')

const server = http.createServer(serverApp.callback())

/**
 * Before starting http service verify http port is free.
 * When port is not free, but set in ENV raise an exception.
 */
async function start () {
  let port = parseInt(process.env.PORT, 0) || 8000
  port = await getPort({ port: getPort.makeRange(port, port + 100) })

  if (process.env.PORT && parseInt(process.env.PORT, 0) !== port) {
    throw new Error(`HTTP Server could not be started because the specified port ${port} is not free.`)
  }

  server.listen({ port }, () => {
    log.info(`🚀 Server ready at http://localhost:${port}`)
    log.info(`🚀 Server ready at http://localhost:${port}${apolloService.graphqlPath}`)
    new SubscriptionServer({
      execute,
      subscribe,
      schema
    }, {
      server,
      path: '/graphql',
    })
  })
}

start()
