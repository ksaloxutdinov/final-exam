import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ReviewEntity } from 'src/modules/reviews/entities/review.entity';
import { OneToMany } from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;


    @Column({ nullable: true })
    loyaltyPoints!: number;

    @Column({ default: true })
    isActive!: boolean;

    @OneToMany(() => ReviewEntity, review => review.user)
    reviews!: ReviewEntity[];
}

export class User {
}