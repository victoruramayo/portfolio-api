import { Module } from '@nestjs/common';
import { PortfolioController } from './controller/portfolio.controller';
import { PortfolioService } from './service/portfolio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './models/entities/portfolio.entity';
import { User } from '../auth/models/entities/user.entity';
import { Profile } from '../auth/models/entities/profile.entity';
import { Proyect } from './models/entities/proyect.entity';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService],
  imports: [TypeOrmModule.forFeature([Portfolio, User, Profile, Proyect])],
})
export class PortfolioModule {}
