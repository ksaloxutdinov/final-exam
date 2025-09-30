import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './entities/review.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll(): Promise<ReviewEntity[]> {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReviewEntity> {
    return this.reviewsService.findOne(+id);
  }
}