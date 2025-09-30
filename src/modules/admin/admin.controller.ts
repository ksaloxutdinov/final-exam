import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminEntity } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto): Promise<AdminEntity> {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll(): Promise<AdminEntity[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AdminEntity> {
    return this.adminService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.adminService.remove(+id);
  }
}