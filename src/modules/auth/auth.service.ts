import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = this.userRepository.create({
      ...registerDto,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.findOne({ where: { email: loginDto.email } });
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async findUserById(id: number): Promise<UserEntity | null> {
    return this.userRepository.findOne({ where: { id } });
  }
}