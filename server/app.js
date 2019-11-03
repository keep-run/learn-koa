const Koa=require('koa')
const views=require('koa-views')
const path=require('path')
const router =require('./router')
const app=new Koa();

/** 加载模板引擎 */
app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}))

router(app)

app.listen(3000,()=>{
    console.log('server is running on port: 3000')
})