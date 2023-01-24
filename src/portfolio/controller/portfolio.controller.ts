import { Controller, Get, Logger, Request, UseGuards } from '@nestjs/common';
import { PortfolioService } from '../service/portfolio.service';
import { AuthGuard } from '@nestjs/passport';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';

@Controller('portfolio')
export class PortfolioController {
  private readonly logger = new Logger(PortfolioController.name);
  constructor(private readonly portfolioService: PortfolioService) {}

  @UseGuards(AuthGuard('apikey'))
  @Get('protected')
  getProtect(@Request() req: RequestApiKeyGuard) {
    const profile = req.user;
    this.logger.log('Here', req.user);
    return this.portfolioService.gen();
  }
}
