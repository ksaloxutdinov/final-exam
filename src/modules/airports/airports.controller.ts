import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';

@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Post()
  create(@Body() createAirportDto: CreateAirportDto) {
    return this.airportsService.create(createAirportDto);
  }

  @Get()
  findAll() {
    return this.airportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airportsService.findOne(+id);
  }
}