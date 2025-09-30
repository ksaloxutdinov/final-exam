import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class CompanyEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255 })
    code!: string;

    @Column({ type: 'text', nullable: true })
    description!: string;

    @Column({ type: 'varchar', length: 255 })
    logoUrl!: string;

    @Column({ type: 'varchar', length: 255 })
    contactEmail!: string;

    @Column({ type: 'varchar', length: 20 })
    contactPhone!: string;

    @Column({ type: 'boolean', default: true })
    isActive!: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt!: Date;
    flights: any;
}