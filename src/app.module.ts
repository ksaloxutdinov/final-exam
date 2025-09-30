import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { FlightsModule } from './modules/flights/flights.module';
import { PlanesModule } from './modules/planes/planes.module';
import { SeatsModule } from './modules/seats/seats.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { ClassesModule } from './modules/classes/classes.module';
import { NewsModule } from './modules/news/news.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { LoyaltyModule } from './modules/loyalty/loyalty.module';
import { CountriesModule } from './modules/countries/countries.module';
import { CitiesModule } from './modules/cities/cities.module';
import { AirportsModule } from './modules/airports/airports.module';
import { AdminModule } from './modules/admin/admin.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    FlightsModule,
    PlanesModule,
    SeatsModule,
    CompaniesModule,
    ClassesModule,
    NewsModule,
    ReviewsModule,
    LoyaltyModule,
    CountriesModule,
    CitiesModule,
    AirportsModule,
    AdminModule,
    DatabaseModule,
  ],
})
export class AppModule {}