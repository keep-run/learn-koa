// const Router = require('koa-router')
// const router = new Router()
// const mysql = require('./mysql/index')
// export default (app) => {
//     router.get('/', async (ctx) => {
//         const title = 'Test';
//         await ctx.render('index', {
//             title
//         })
//     })

//     router.get('/mysqltest', async (ctx) => {
//         let data = await mysql.query()
//         const title = 'mysql';
//         ctx.body={data}
//         // await ctx.render('index', {
//         //     title
//         // })
//     })

//     app.use(router.routes())
// }

import getAllBooks from './controller/getAllBooks'
export const AppRoute=[{
    path:'/getAllBooks',
    method:'get',
     action:getAllBooks
}]