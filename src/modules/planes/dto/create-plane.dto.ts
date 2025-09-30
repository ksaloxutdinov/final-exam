import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlaneDto {
    @IsString()
    @IsNotEmpty()
    readonly model!: string;

    @IsString()
    @IsNotEmpty()
    readonly manufacturer!: string;

    @IsNumber()
    @IsNotEmpty()
    readonly capacity!: number;

    @IsString()
    @IsNotEmpty()
    readonly registrationNumber!: string;

    @IsString()
    readonly description?: string;
}