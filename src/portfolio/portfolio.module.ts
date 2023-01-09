import { Module } from '@nestjs/common';
import { PortfolioController } from './controller/portfolio.controller';
import { PortfolioService } from './service/portfolio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './models/entities/portfolio.entity';
import { User } from './models/entities/user.entity';

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService],
  imports: [TypeOrmModule.forFeature([Portfolio, User])],
})
export class PortfolioModule {}
