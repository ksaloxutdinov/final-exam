import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('planes')
export class PlaneEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    model!: string;

    @Column({ type: 'varchar', length: 50 })
    manufacturer!: string;

    @Column({ type: 'int' })
    capacity!: number;

    @Column({ type: 'varchar', length: 20 })
    registrationNumber!: string;

    @Column({ type: 'date' })
    manufactureDate!: Date;

    @Column({ type: 'varchar', length: 50 })
    status!: string; 
}