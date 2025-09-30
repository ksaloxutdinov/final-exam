import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAirportDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  city?: string;
}