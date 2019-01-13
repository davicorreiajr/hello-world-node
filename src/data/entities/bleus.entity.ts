import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { IsEmail, MinLength } from 'class-validator';

@Entity()
export class Bleus {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  @MinLength(4)
  name: string;

  @Index()
  @Column('text')
  @IsEmail()
  email: string;
}
