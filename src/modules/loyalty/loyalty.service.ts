import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoyaltyEntity } from './entities/loyalty.entity';
import { CreateLoyaltyDto } from './dto/create-loyalty.dto';

@Injectable()
export class LoyaltyService {
  constructor(
    @InjectRepository(LoyaltyEntity)
    private loyaltyRepository: Repository<LoyaltyEntity>,
  ) {}

  async create(createLoyaltyDto: CreateLoyaltyDto): Promise<LoyaltyEntity> {
    const loyalty = this.loyaltyRepository.create({
      ...createLoyaltyDto,
      userId: Number(createLoyaltyDto.userId),
    });
    return this.loyaltyRepository.save(loyalty);
  }

  async findAll(): Promise<LoyaltyEntity[]> {
    return this.loyaltyRepository.find();
  }

  async findOne(id: number): Promise<LoyaltyEntity | null> {
    return this.loyaltyRepository.findOne({ where: { id } });
  }

  async update(id: number, updateLoyaltyDto: CreateLoyaltyDto): Promise<LoyaltyEntity> {
    await this.loyaltyRepository.update(id, updateLoyaltyDto);

    const updatedLoyalty = await this.findOne(id);
    if (!updatedLoyalty) {
      throw new Error(`Loyalty with id ${id} not found`);
    }

    return updatedLoyalty;
  }


  async remove(id: number): Promise<void> {
    await this.loyaltyRepository.delete(id);
  }
}