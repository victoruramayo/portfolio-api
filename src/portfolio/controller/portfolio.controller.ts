import { Controller, Get, Logger } from '@nestjs/common';
import { PortfolioService } from '../service/portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  private readonly logger = new Logger(PortfolioController.name);
  constructor(private readonly portfolioService: PortfolioService) {}
  @Get()
  findAllBy() {
    this.logger.log('Here');
    return this.portfolioService.getAll();
  }

  @Get('api')
  getApikey() {
    this.logger.log('Here');
    return this.portfolioService.getApiKey();
  }
}
