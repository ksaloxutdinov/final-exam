import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly adminRepository: Repository<AdminEntity>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<AdminEntity> {
    const admin = this.adminRepository.create(createAdminDto);
    return await this.adminRepository.save(admin);
  }

  async findAll(): Promise<AdminEntity[]> {
    return await this.adminRepository.find();
  }

  async findOne(id: number): Promise<AdminEntity> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (!admin) {
      throw new Error(`Admin with id ${id} not found`);
    }
    return admin;
  }

  async update(id: number, updateAdminDto: CreateAdminDto): Promise<AdminEntity> {
    await this.adminRepository.update(id, updateAdminDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }
}