/**
 * API
 * @author Alexander Vu
 */
const http = require('http');
const getPort = require('get-port');
require('dotenv').config();
const api = require('./lib/api');
const { log } = require('./lib/log');
const apolloService = require('./lib/apollo');

const httpService = http.createServer(api.callback());

/**
 * Before starting http service verify http port is free.
 * When port is not free, but set in ENV raise an exception.
 */
async function startHttpService() {
  let httpPort = parseInt(process.env.PORT, 0) || 8000;
  httpPort = await getPort({ port: getPort.makeRange(httpPort, httpPort + 100) });

  if (process.env.PORT && parseInt(process.env.PORT, 0) !== httpPort) {
    throw new Error(`HTTP Server could not be started because the specified port ${httpPort} is not free.`);
  }

  httpService.listen({ port: httpPort }, () => {
    log.info(`🚀 Server ready at http://localhost:${httpPort}`);
    log.info(`🚀 Server ready at http://localhost:${httpPort}${apolloService.graphqlPath}`);
  });
}

/**
 * Before starting websocket service verify port address is free.
 */
async function startWsService() {
  let wsPort = parseInt(process.env.WS_PORT, 0) || 8300;
  wsPort = await getPort({ port: getPort.makeRange(wsPort, wsPort + 100) });

  if (process.env.PORT && parseInt(process.env.WS_PORT, 0) !== wsPort) {
    throw new Error(`WebSocket Server could not be started because the specified port ${wsPort} is not free.`);
  }

  wsapi.listen({ port: wsPort }, () => {
    log.info(`🚀 Server ready at ws://localhost:${wsPort}${apolloService.graphqlPath}`);
  });
}

/**
 * Start procedure
 */
async function start() {
  // It is always a good idea to start DB connections independent from
  // http server. So here you could just start a connection for:
  // mongo();
  try {
    await startHttpService();
    await startWsService();
  } catch (err) {
    log.error('Error while starting services:', err);
  }
}

/**
 * Start procedure
 * All services are independent from each.
 */
start();
