import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from './entities/country.entity';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private countriesRepository: Repository<CountryEntity>,
  ) {}

  async findAll(): Promise<CountryEntity[]> {
    return this.countriesRepository.find();
  }

  async findOne(id: number): Promise<CountryEntity | null> {
    return this.countriesRepository.findOneBy({ id });
  }

  async create(createCountryDto: CreateCountryDto): Promise<CountryEntity> {
    const country = this.countriesRepository.create(createCountryDto);
    return this.countriesRepository.save(country);
  }

  async update(id: number, updateCountryDto: CreateCountryDto): Promise<CountryEntity> {
    await this.countriesRepository.update(id, updateCountryDto);
    const updatedCountry = await this.findOne(id);
    if (!updatedCountry) {
      throw new Error(`Country with id ${id} not found`);
    }
    return updatedCountry;
  }

  async remove(id: number): Promise<void> {
    await this.countriesRepository.delete(id);
  }
}