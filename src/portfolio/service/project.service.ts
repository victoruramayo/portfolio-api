import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../models/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  getProjectsByPortfolioId(portfolioId: number) {
    return this.projectRepo.find({
      where: { portfolioId },
      order: { startDate: { direction: 'desc' } },
    });
  }
}
