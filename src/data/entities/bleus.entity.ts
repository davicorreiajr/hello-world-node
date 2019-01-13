import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bleus {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Column('text')
  email: string;
}
