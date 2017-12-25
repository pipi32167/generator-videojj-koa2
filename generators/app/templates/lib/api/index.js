const Router = require('koa-router')

const router = new Router()


/**
 * @api {get} / 首页
 * @apiVersion 0.1.0
 * @apiName index
 * @apiGroup INDEX
 */

router.get('/', async (ctx, next) => {
  await ctx.render('index')
})

module.exports = router
