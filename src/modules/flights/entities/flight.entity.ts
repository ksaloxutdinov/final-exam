import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CompanyEntity } from '../../companies/entities/company.entity';
import { AirportEntity } from '../../airports/entities/airport.entity';
import { ClassEntity } from '../../classes/entities/class.entity';
import { ReviewEntity } from 'src/modules/reviews/entities/review.entity';

@Entity('flights')
export class FlightEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    flightNumber!: string;

    @ManyToOne(() => CompanyEntity, (company) => company.flights)
    company!: CompanyEntity;

    @ManyToOne(() => AirportEntity, (airport) => airport.departureFlights)
    departureAirport!: AirportEntity;

    @ManyToOne(() => AirportEntity, (airport) => airport.arrivalFlights)
    arrivalAirport!: AirportEntity;

    @ManyToOne(() => ClassEntity, (classEntity) => classEntity.flights)
    flightClass!: ClassEntity;

    @Column()
    departureTime!: Date;

    @Column()
    arrivalTime!: Date;

    @Column()
    price!: number;

    @Column({ default: true })
    isActive!: boolean;

    @OneToMany(() => ReviewEntity, review => review.user)
        reviews!: ReviewEntity[];
}