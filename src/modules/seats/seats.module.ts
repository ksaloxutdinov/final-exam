import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { SeatEntity } from './entities/seat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeatEntity])],
  controllers: [SeatsController],
  providers: [SeatsService],
  exports: [SeatsService],
})
export class SeatsModule {}