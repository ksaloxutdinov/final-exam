import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column('text')
  content!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}