import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('loyalty')
export class LoyaltyEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: number;

    @Column()
    points!: number;

    @Column()
    tier!: string;

    @ManyToOne(() => User, (user: { loyalties: any; }) => user.loyalties)
    user: User = new User;
}