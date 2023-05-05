import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { envConfig } from './commons/env.config';
import { ConfigType } from '@nestjs/config';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Portfolio')
@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(
    private readonly appService: AppService,
    @Inject(envConfig.KEY)
    private readonly config: ConfigType<typeof envConfig>,
  ) {}

  @ApiOkResponse({
    description: 'Hola mundo',
    schema: { type: 'string', example: 'Hello World' },
  })
  @Get()
  getHello(): string {
    this.logger.log(this.config.database.host);
    return this.appService.getHello();
  }
}
