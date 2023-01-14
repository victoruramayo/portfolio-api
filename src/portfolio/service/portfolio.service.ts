import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../models/entities/portfolio.entity';
import { generateAPIKey } from '../../commons/prefixed-api-key.utils';

@Injectable()
export class PortfolioService {
  private readonly logger = new Logger(PortfolioService.name);
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepo: Repository<Portfolio>,
  ) {}

  getAll() {
    this.logger.log('En service');
    return this.portfolioRepo.find();
  }

  async getApiKey() {
    const api = await generateAPIKey({ keyPrefix: 'PF' });
    this.logger.log('Api key:', api);
    return api;
  }
}
