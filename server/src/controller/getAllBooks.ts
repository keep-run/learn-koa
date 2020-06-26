import {Context} from 'koa'
import {getManager} from 'typeorm'
import {Book} from '../entity/book'

export default async (ctx:Context)=>{
  const repository=getManager().getRepository(Book)   //获取book实体库
  
  
  const books= await repository.find()  //获取所有的book

  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
  ctx.set('Content-Type', 'application/json'); // Content-Type表示具体请求中的媒体类型信息

  ctx.set('Access-Control-Allow-Credentials', true); // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";

  ctx.body=books


}