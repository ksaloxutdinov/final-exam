import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  address!: string;

  @IsString()
  @IsNotEmpty()
  contactNumber!: string;

  @IsString()
  @IsNotEmpty()
  email!: string;
}