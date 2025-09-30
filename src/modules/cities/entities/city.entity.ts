import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cities')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 100 })
  country!: string;

  @Column({ type: 'varchar', length: 100 })
  airport!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;
}