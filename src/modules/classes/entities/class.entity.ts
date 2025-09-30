import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classes')
export class ClassEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    @Column()
    amenities!: string;

    @Column()
    createdAt!: Date;

    @Column()
    updatedAt!: Date;
    flights: any;
}