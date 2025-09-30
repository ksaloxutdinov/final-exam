import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeatEntity } from './entities/seat.entity';
import { CreateSeatDto } from './dto/create-seat.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(SeatEntity)
    private readonly seatRepository: Repository<SeatEntity>,
  ) {}

  async create(createSeatDto: CreateSeatDto): Promise<SeatEntity> {
    const seat = this.seatRepository.create(createSeatDto);
    return this.seatRepository.save(seat);
  }

  async findAll(): Promise<SeatEntity[]> {
    return this.seatRepository.find();
  }


  async findOne(id: number): Promise<SeatEntity> {
    const seat = await this.seatRepository.findOne({ where: { id } });
    if (!seat) {
      throw new NotFoundException(`Seat with id ${id} not found`);
    }
    return seat;
  }


  async update(id: number, updateSeatDto: CreateSeatDto): Promise<SeatEntity> {
    await this.seatRepository.update(id, updateSeatDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.seatRepository.delete(id);
  }
}