const Router = require('koa-router')
const router = new Router()
const mysql = require('./mysql/index')
module.exports= (app) => {
    router.get('/', async (ctx) => {
        const title = 'Test';
        await ctx.render('index', {
            title
        })
    })

    router.get('/mysqltest', async (ctx) => {
        let data = await mysql.query()
        const title = 'mysql';
        ctx.body={data}
        // await ctx.render('index', {
        //     title
        // })
    })

    app.use(router.routes())
}
