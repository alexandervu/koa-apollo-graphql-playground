/**
 * Compose Koa middleware for API server
 * @author Alexander Vu
 */
const compose = require('koa-compose')
const compress = require('koa-compress')
const helmet = require('koa-helmet')
const bodyparser = require('koa-bodyparser')
const convert = require('koa-convert')
const cors = require('koa-cors')
const routeLogger = require('./route-logging')

const middleware = () => {
  return compose([
    convert(cors()),
    helmet(),
    bodyparser(),
    compress(),
    routeLogger()
  ])
}

module.exports = middleware
