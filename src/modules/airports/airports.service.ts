import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirportEntity } from './entities/airport.entity';
import { CreateAirportDto } from './dto/create-airport.dto';

@Injectable()
export class AirportsService {
  constructor(
    @InjectRepository(AirportEntity)
    private readonly airportRepository: Repository<AirportEntity>,
  ) {}

  async create(createAirportDto: CreateAirportDto): Promise<AirportEntity> {
    const airport = this.airportRepository.create(createAirportDto);
    return await this.airportRepository.save(airport);
  }

  async findAll(): Promise<AirportEntity[]> {
    return await this.airportRepository.find();
  }

  async findOne(id: number): Promise<AirportEntity> {
    const airport = await this.airportRepository.findOne({ where: { id } });
    if (!airport) {
      throw new Error(`Airport with id ${id} not found`);
    }
    return airport;
  }

  async update(id: number, updateAirportDto: CreateAirportDto): Promise<AirportEntity> {
    await this.airportRepository.update(id, updateAirportDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.airportRepository.delete(id);
  }
}