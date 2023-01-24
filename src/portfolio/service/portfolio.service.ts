import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../models/entities/portfolio.entity';
import { generateAPIKey } from '../../commons/prefixed-api-key.utils';
import { ConfigType } from '@nestjs/config';
import { envConfig } from '../../commons/env.config';

@Injectable()
export class PortfolioService {
  private readonly logger = new Logger(PortfolioService.name);
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepo: Repository<Portfolio>,
    @Inject(envConfig.KEY)
    private readonly config: ConfigType<typeof envConfig>,
  ) {}

  async gen() {
    return await generateAPIKey({ keyPrefix: this.config.apikey.prefix });
  }
}
