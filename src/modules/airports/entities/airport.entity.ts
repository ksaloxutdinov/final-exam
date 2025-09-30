import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('airports')
export class AirportEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 100 })
  city!: string;

  @Column({ type: 'varchar', length: 100 })
  country!: string;

  @Column({ type: 'varchar', length: 3 })
  code!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;
    departureFlights: any;
    arrivalFlights: any;
}