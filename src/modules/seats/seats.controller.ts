import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { SeatEntity } from './entities/seat.entity';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  create(@Body() createSeatDto: CreateSeatDto): Promise<SeatEntity> {
    return this.seatsService.create(createSeatDto);
  }

  @Get()
  findAll(): Promise<SeatEntity[]> {
    return this.seatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SeatEntity> {
    return this.seatsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.seatsService.remove(+id);
  }
}