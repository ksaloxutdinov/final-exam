import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { SeatEntity } from '../entities/seat.entity';

export class CreateSeatDto {
  @IsNotEmpty()
  @IsString()
  seatNumber!: string;

  @IsNotEmpty()
  @IsEnum(SeatEntity)
  seatClass!: SeatEntity;

  @IsNotEmpty()
  @IsString()
  flightId!: string;

  @IsNotEmpty()
  @IsString()
  userId!: string;
}