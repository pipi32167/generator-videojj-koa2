const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')
const serve = require('koa-static')
const views = require('koa-views')
const convert = require('koa-convert')
require('/lib/config')
const errorHandler = require('/lib/middlewares/errorHandler')
const api = require('/lib/api')

const app = new Koa()

app.use(errorHandler())
app.use(views(path.join(__dirname, '../views'), {
  map: {
    html: 'ejs'
  }
}))
app.use(logger())
app.use(bodyParser())
app.keys = ['some secret hurr']
app.use(convert(session(app)))
app.use(serve('../public'))
app
  .use(api.routes())
  .use(api.allowedMethods())

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST)

console.log(`url: http://${HOST}:${PORT}`)
