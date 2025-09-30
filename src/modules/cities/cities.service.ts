import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<CityEntity> {
    const city = this.cityRepository.create(createCityDto);
    return this.cityRepository.save(city);
  }

  async findAll(): Promise<CityEntity[]> {
    return this.cityRepository.find();
  }

  async findOne(id: number): Promise<CityEntity | null> {
    return this.cityRepository.findOneBy({ id });
  }

  async update(id: number, updateCityDto: CreateCityDto): Promise<CityEntity> {
    await this.cityRepository.update(id, updateCityDto);
    const updatedCity = await this.findOne(id);
    if (!updatedCity) {
      throw new Error(`City with id ${id} not found`);
    }
    return updatedCity;
  }

  async remove(id: number): Promise<void> {
    await this.cityRepository.delete(id);
  }
}