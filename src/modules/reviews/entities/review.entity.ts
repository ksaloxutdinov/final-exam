import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { FlightEntity } from '../../flights/entities/flight.entity';

@Entity('reviews')
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    rating!: number;

    @Column()
    comment!: string;

    @ManyToOne(() => UserEntity, user => user.reviews)
    user!: UserEntity;

    @ManyToOne(() => FlightEntity, flight => flight.reviews)
    flight!: FlightEntity;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
}