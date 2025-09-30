import { Entity, Column } from 'typeorm';

@Entity('admins')
export class AdminEntity {
    @Column()
    id!: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;

    @Column({ default: true })
    isActive!: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
}

export enum Role {
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    USER = 'USER'
}