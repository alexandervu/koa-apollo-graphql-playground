/**
 * RIA-API WebSockets
 * @author    Alexander Vu
 * @license   private
 */
const Koa = require('koa')
const websockify = require('koa-websocket')
const apolloService = require('./apollo')

const wsapi = websockify(new Koa())

apolloService.applyMiddleware({ app: wsapi.ws })

module.exports = wsapi
