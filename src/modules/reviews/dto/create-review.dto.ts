import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  readonly userId!: string;

  @IsNotEmpty()
  @IsString()
  readonly flightId!: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  readonly rating!: number;

  @IsNotEmpty()
  @IsString()
  readonly comment!: string;
}