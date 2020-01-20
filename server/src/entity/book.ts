import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()

// 定义数据库表结构
export class Book{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @Column()
  press: string;
}