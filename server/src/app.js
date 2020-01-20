import * as  Koa from 'koa'
import * as views from 'koa-views'
import * as Router from "koa-router";
import * as path from 'path'
import * as bodyParser from "koa-bodyparser"
import "reflect-metadata"
import { createConnection } from 'typeorm'
import { AppRoute } from './router'



createConnection().then(async connection => {

    const app = new Koa();
    const router = new Router();

    app.use(views(path.join(__dirname, './view'), {
        extension: 'ejs'
    }))
    AppRoute.forEach(route => router[route.method](route.path,route.action))

    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(3000);
    console.log("Koa application is up and running on port 3000");

}).catch(error => console.log('typeorm connection error:', error))

// const app=new Koa();


// /** 加载模板引擎 指定模板的上一层路径*/


// app.use(views(path.join(__dirname,'./view'),{
//     extension:'ejs'
// }))

// router(app)

// app.listen(3000,()=>{
//     console.log('server is running on port: 3000')
// })