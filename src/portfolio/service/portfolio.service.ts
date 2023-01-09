import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../models/entities/user.entity';

@Injectable()
export class PortfolioService {
  private readonly logger = new Logger(PortfolioService.name);
  constructor(
    @InjectRepository(Users)
    private readonly portfolioRepo: Repository<Users>,
  ) {}

  getAll() {
    this.logger.log('En service');
    return this.portfolioRepo.find();
  }
}
