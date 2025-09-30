import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('countries')
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 3 })
  code!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;
}