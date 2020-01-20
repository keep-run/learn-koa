import {Context} from 'koa'
import {getManager} from 'typeorm'
import {Book} from '../entity/book'

export default async (ctx:Context)=>{
  const repository=getManager().getRepository(Book)   //获取book实体库
  
  const newBook=repository.create({
    name:'JS程序设计',
    author:'未知',
    price:23,
    press:'机械工业出版社'
  })
  await repository.save(newBook)
  ctx.body=newBook
}