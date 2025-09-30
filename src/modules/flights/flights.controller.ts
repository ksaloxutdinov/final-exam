import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { FlightEntity } from './entities/flight.entity';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto): Promise<FlightEntity> {
    return this.flightsService.create(createFlightDto);
  }

  @Get()
  findAll(): Promise<FlightEntity[]> {
    return this.flightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<FlightEntity | null> {
    return this.flightsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.flightsService.remove(+id);
  }
}