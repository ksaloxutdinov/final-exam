import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlightEntity } from './entities/flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(FlightEntity)
    private readonly flightRepository: Repository<FlightEntity>,
  ) {}

  async create(createFlightDto: CreateFlightDto): Promise<FlightEntity> {
    const flight = this.flightRepository.create(createFlightDto);
    return this.flightRepository.save(flight);
  }

  async findAll(): Promise<FlightEntity[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<FlightEntity | null> {
    return this.flightRepository.findOne({ where: { id } });
  }

  async update(id: number, updateFlightDto: CreateFlightDto): Promise<FlightEntity> {
    await this.flightRepository.update(id, updateFlightDto);
    const updatedFlight = await this.findOne(id);
    if (!updatedFlight) {
      throw new Error(`Flight with id ${id} not found`);
    }
    return updatedFlight;
  }

  async remove(id: number): Promise<void> {
    await this.flightRepository.delete(id);
  }
}