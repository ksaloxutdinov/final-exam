import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaneEntity } from './entities/plane.entity';
import { CreatePlaneDto } from './dto/create-plane.dto';

@Injectable()
export class PlanesService {
  constructor(
    @InjectRepository(PlaneEntity)
    private readonly planeRepository: Repository<PlaneEntity>,
  ) {}

  async create(createPlaneDto: CreatePlaneDto): Promise<PlaneEntity> {
    const plane = this.planeRepository.create(createPlaneDto);
    return this.planeRepository.save(plane);
  }

  async findAll(): Promise<PlaneEntity[]> {
    return this.planeRepository.find();
  }

  async findOne(id: number): Promise<PlaneEntity | null> {
    return this.planeRepository.findOneBy({ id });
  }

  async update(id: number, updatePlaneDto: CreatePlaneDto): Promise<PlaneEntity> {
    await this.planeRepository.update(id, updatePlaneDto);
    const updated = await this.findOne(id);
    if (!updated) {
      throw new Error(`News with id ${id} not found`);
    }
    return updated;
  }


  async remove(id: number): Promise<void> {
    await this.planeRepository.delete(id);
  }
}