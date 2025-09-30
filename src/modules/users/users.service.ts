import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }


async findOne(id: number): Promise<UserEntity> {
  const seat = await this.userRepository.findOne({ where: { id } });
  if (!seat) {
    throw new NotFoundException(`Seat with id ${id} not found`);
  }
  return seat;
}


  async update(id: number, updateUserDto: CreateUserDto): Promise<UserEntity> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}