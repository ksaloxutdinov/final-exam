import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanesController } from './planes.controller';
import { PlanesService } from './planes.service';
import { PlaneEntity } from './entities/plane.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaneEntity])],
  controllers: [PlanesController],
  providers: [PlanesService],
  exports: [PlanesService],
})
export class PlanesModule {}