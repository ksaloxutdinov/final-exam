import { IsString, IsNotEmpty, IsDate, IsEnum } from 'class-validator';

export class CreateFlightDto {
    @IsString()
    @IsNotEmpty()
    origin!: string;

    @IsString()
    @IsNotEmpty()
    destination!: string;

    @IsDate()
    departureDate!: Date;

    @IsDate()
    arrivalDate!: Date;

    @IsString()
    @IsNotEmpty()
    airline!: string;

    @IsEnum(['VIP', 'ECONOM'])
    class!: 'VIP' | 'ECONOM';

    @IsNotEmpty()
    seatsAvailable!: number;

    @IsString()
    @IsNotEmpty()
    flightNumber!: string;

    @IsString()
    @IsNotEmpty()
    status!: string; 
}