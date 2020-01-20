import {Context} from 'koa'
import {getManager} from 'typeorm'
import {Book} from '../entity/book'

export default async (ctx:Context)=>{
  const repository=getManager().getRepository(Book)   //获取book实体库
  const books= await repository.find()  //获取所有的book
  ctx.body=books
}