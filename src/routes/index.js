const messageRouter = require('./messages/index')
const combineRouters = require('koa-combine-routers')

const router = combineRouters(
  messageRouter
)

module.exports = router
