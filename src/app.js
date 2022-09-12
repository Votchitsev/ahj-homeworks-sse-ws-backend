const Koa = require('koa')

const app = new Koa()
const router = require('./routes/index')

app.use(router())

app.listen(8080)
