import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './entities/review.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    const review = this.reviewRepository.create(createReviewDto);
    return await this.reviewRepository.save(review);
  }

  async findAll(): Promise<ReviewEntity[]> {
    return await this.reviewRepository.find();
  }


async findOne(id: number): Promise<ReviewEntity> {
  const seat = await this.reviewRepository.findOne({ where: { id } });
  if (!seat) {
    throw new NotFoundException(`Seat with id ${id} not found`);
  }
  return seat;
}


  async update(id: number, updateReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    await this.reviewRepository.update(id, updateReviewDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}