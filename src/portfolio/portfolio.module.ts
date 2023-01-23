import { Module } from '@nestjs/common';
import { PortfolioController } from './controller/portfolio.controller';
import { PortfolioService } from './service/portfolio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './models/entities/portfolio.entity';
import { User } from '../auth/models/entities/user.entity';
import { Profile } from '../auth/models/entities/profile.entity';
import { Project } from './models/entities/project.entity';
import { ProjectController } from './controller/project.controller';
import { ProjectService } from './service/project.service';

@Module({
  controllers: [PortfolioController, ProjectController],
  providers: [PortfolioService, ProjectService],
  imports: [TypeOrmModule.forFeature([Portfolio, User, Profile, Project])],
})
export class PortfolioModule {}
