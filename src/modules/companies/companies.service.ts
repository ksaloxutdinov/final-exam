import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyEntity } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  async findAll(): Promise<CompanyEntity[]> {
    return this.companyRepository.find();
  }

  async findOne(id: number): Promise<CompanyEntity> {
    const company = await this.companyRepository.findOneBy({ id });
    if (!company) {
      throw new Error(`Company with id ${id} not found`);
    }
    return company;
  }

  async update(id: number, updateCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
    await this.companyRepository.update(id, updateCompanyDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.companyRepository.delete(id);
  }
}