import {Context} from 'koa'
import {getManager} from 'typeorm'
import {Book} from '../entity/book'

export default async (ctx:Context)=>{
  const repository=getManager().getRepository(Book)   //获取book实体库
  //更新指定id的 price
  const {id,price}=ctx.query
  await repository.update(id, { price});
  ctx.body='success'
}