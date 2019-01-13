import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Bleus {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Index()
  @Column('text')
  email: string;
}
