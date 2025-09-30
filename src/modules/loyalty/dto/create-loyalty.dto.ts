import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLoyaltyDto {
    @IsNotEmpty()
    @IsString()
    readonly userId!: number;

    @IsNotEmpty()
    @IsNumber()
    readonly points!: number;

    @IsNotEmpty()
    @IsString()
    readonly tier!: string;

    @IsString()
    readonly description?: string;
}