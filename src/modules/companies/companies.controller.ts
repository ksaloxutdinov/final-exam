import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyEntity } from './entities/company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll(): Promise<CompanyEntity[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CompanyEntity> {
    return this.companiesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.companiesService.remove(+id);
  }
}