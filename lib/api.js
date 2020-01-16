/**
 * API main script, starting KoaJS
 * and adding Middleware, Routes and Apollo-Server.
 * We do not start the http service here!
 * @author Alexander Vu
 */
const Koa = require('koa')
const middleware = require('./middleware')
const apolloService = require('./apollo')
const router = require('./routes')

const api = new Koa()

api.use(middleware())
apolloService.applyMiddleware({ app: api })
api.use(router.routes())
api.use(router.allowedMethods())

module.exports = api
