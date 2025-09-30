import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FlightEntity } from '../../flights/entities/flight.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('seats')
export class SeatEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    seatNumber!: string;

    @Column()
    class!: string; 

    @Column({ default: false })
    isBooked!: boolean;

    @ManyToOne(() => FlightEntity)
    flight!: FlightEntity;

    @ManyToOne(() => UserEntity, { nullable: true })
    user!: UserEntity;
}