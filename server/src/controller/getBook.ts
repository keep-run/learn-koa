import {Context} from 'koa'
import {getManager} from 'typeorm'
import {Book} from '../entity/book'

export default async (ctx:Context)=>{
  const repository=getManager().getRepository(Book)   //获取book实体库
  const book= await repository.findOne(ctx.query.id)  //根据id查找book
  if(!book){
    ctx.status=404
    return 
  }
  ctx.body=book
}