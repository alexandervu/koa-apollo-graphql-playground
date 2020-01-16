/**
 * Compose Middleware for route logging
 * Handle all errors called by ctx.throw([status], [msg], [properties]) or
 * ctx.assert(value, [status], [msg], [properties]) and emit the error on
 * the application itself.
 * @author Alexander Vu
 */
const { log } = require('../log');

function routeLogging() {
  return function logginMiddlewarer(ctx, next) {
    try {
      if (ctx.url !== '/graphql') {
        log.info(`${ctx.method} for ${ctx.url} from ${ctx.origin}`);
      }
    } catch (error) {
      log.error(error);
    }

    return next();
  };
}
module.exports = routeLogging;
