import { Controller, Get, Logger, Request, UseGuards } from '@nestjs/common';
import { PortfolioService } from '../service/portfolio.service';
import { AuthGuard } from '@nestjs/passport';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import {
  ApiHeader,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiSecurity('Api-Key')
@ApiTags('Portfolio')
@ApiHeader({
  name: 'Authorization',
  description: 'Api key generado',
})
@Controller('portfolio')
export class PortfolioController {
  private readonly logger = new Logger(PortfolioController.name);
  constructor(private readonly portfolioService: PortfolioService) {}

  @ApiOkResponse({
    description: 'Retorna un api key no válido',
    schema: {
      type: 'object',
      properties: {
        shortToken: { type: 'string', example: '4SmnCHErjccA' },
        longToken: {
          type: 'string',
          example: 'BeYh8dnHcmpFune1oLgMSUzmMdMWaaKi',
        },
        longTokenHash: {
          type: 'string',
          example:
            '$2b$12$ddzHwX6MdkETpn504TJ7degkS75KuSUmgICAls6lvrLqMSOJkdaze',
        },
        token: {
          type: 'string',
          example: 'PF_4SmnCHErjccA_BeYh8dnHcmpFune1oLgMSUzmMdMWaaKi',
        },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Sin Authorización',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 401 },
        message: { type: 'string', example: "Sorry don't have permission" },
        error: { type: 'string', example: 'Unauthorized' },
      },
    },
  })
  @UseGuards(AuthGuard('apikey'))
  @Get('protected')
  getProtect(@Request() req: RequestApiKeyGuard) {
    this.logger.log('Here', req.user);
    return this.portfolioService.gen();
  }
}
