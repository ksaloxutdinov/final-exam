import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Role } from '../entities/admin.entity';

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString()
    readonly name!: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email!: string;

    @IsNotEmpty()
    @IsString()
    readonly password!: string;

    @IsNotEmpty()
    @IsEnum(Role)
    readonly role: Role = Role.SUPER_ADMIN;
}