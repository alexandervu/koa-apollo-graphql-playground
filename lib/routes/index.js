const Router = require('koa-router')
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = '<html><body>Koa Apollo <a href="/graphql">GraphQL</a> playground routes.</body></html>'
  next()
})

module.exports = router
