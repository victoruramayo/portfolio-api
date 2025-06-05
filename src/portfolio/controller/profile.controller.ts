import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import {
  ApiHeader,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Profile } from '../../auth/models/entities/profile.entity';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';

@ApiSecurity('Api-Key')
@ApiTags('Portfolio')
@ApiHeader({
  name: 'Authorization',
  description: 'Api key generado',
})
@Controller('profile')
export class ProfileController {
  @ApiOkResponse({
    description: 'Retorna la información del usuario',
    type: Profile,
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
  @Get()
  @UseGuards(ApiKeyGuard)
  getProfile(@Req() reques: RequestApiKeyGuard) {
    return reques.user;
  }
}
