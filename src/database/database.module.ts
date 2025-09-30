import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../modules/users/entities/user.entity';
import { FlightEntity } from '../modules/flights/entities/flight.entity';
import { PlaneEntity } from '../modules/planes/entities/plane.entity';
import { SeatEntity } from '../modules/seats/entities/seat.entity';
import { CompanyEntity } from '../modules/companies/entities/company.entity';
import { ClassEntity } from '../modules/classes/entities/class.entity';
import { NewsEntity } from '../modules/news/entities/news.entity';
import { ReviewEntity } from '../modules/reviews/entities/review.entity';
import { LoyaltyEntity } from '../modules/loyalty/entities/loyalty.entity';
import { CountryEntity } from '../modules/countries/entities/country.entity';
import { CityEntity } from '../modules/cities/entities/city.entity';
import { AirportEntity } from '../modules/airports/entities/airport.entity';
import { AdminEntity } from '../modules/admin/entities/admin.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      FlightEntity,
      PlaneEntity,
      SeatEntity,
      CompanyEntity,
      ClassEntity,
      NewsEntity,
      ReviewEntity,
      LoyaltyEntity,
      CountryEntity,
      CityEntity,
      AirportEntity,
      AdminEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}