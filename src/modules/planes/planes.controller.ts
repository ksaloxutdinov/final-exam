import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlanesService } from './planes.service';
import { CreatePlaneDto } from './dto/create-plane.dto';
import { PlaneEntity } from './entities/plane.entity';

@Controller('planes')
export class PlanesController {
  constructor(private readonly planesService: PlanesService) {}

  @Post()
  create(@Body() createPlaneDto: CreatePlaneDto): Promise<PlaneEntity> {
    return this.planesService.create(createPlaneDto);
  }

  @Get()
  findAll(): Promise<PlaneEntity[]> {
    return this.planesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PlaneEntity | null> {
    return this.planesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.planesService.remove(+id);
  }
}