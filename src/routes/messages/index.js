const Router = require('@koa/router')

const messageRouter = new Router()

messageRouter.get('/', (ctx) => {
  ctx.response.body = 'hello world'
})

module.exports = messageRouter
