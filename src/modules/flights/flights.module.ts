import { Module } from '@nestjs/common';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightEntity } from './entities/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlightEntity])],
  controllers: [FlightsController],
  providers: [FlightsService],
  exports: [FlightsService],
})
export class FlightsModule {}