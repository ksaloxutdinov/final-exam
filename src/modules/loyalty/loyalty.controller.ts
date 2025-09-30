import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoyaltyService } from './loyalty.service';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';

@Controller('loyalty')
export class LoyaltyController {
  constructor(private readonly loyaltyService: LoyaltyService) {}

  @Post()
  create(@Body() createLoyaltyDto: CreateLoyaltyDto) {
    return this.loyaltyService.create(createLoyaltyDto);
  }

  @Get()
  findAll() {
    return this.loyaltyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltyService.findOne(+id);
  }
}