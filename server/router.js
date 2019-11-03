const Router = require('koa-router')
const router = new Router()

module.exports= (app) => {
    router.get('/', async (ctx) => {
        const title = 'Test';
        await ctx.render('index', {
            title
        })
    })
    app.use(router.routes())
}
