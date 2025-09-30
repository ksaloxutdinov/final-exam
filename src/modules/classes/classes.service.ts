import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassEntity } from './entities/class.entity';
import { CreateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(ClassEntity)
    private classesRepository: Repository<ClassEntity>,
  ) {}

  async create(createClassDto: CreateClassDto): Promise<ClassEntity> {
    const classEntity = this.classesRepository.create(createClassDto);
    return this.classesRepository.save(classEntity);
  }

  async findAll(): Promise<ClassEntity[]> {
    return this.classesRepository.find();
  }

  async findOne(id: number): Promise<ClassEntity | null> {
    return this.classesRepository.findOneBy({ id });
  }

  async update(id: number, updateClassDto: CreateClassDto): Promise<ClassEntity> {
    await this.classesRepository.update(id, updateClassDto);
    const updatedClass = await this.findOne(id);
    if (!updatedClass) {
      throw new Error(`Class with id ${id} not found`);
    }
    return updatedClass;
  }

  async remove(id: number): Promise<void> {
    await this.classesRepository.delete(id);
  }
}