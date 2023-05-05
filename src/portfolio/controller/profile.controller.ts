import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiHeader,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Profile } from '../../auth/models/entities/profile.entity';

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
  @UseGuards(AuthGuard('apikey'))
  getProfile(@Req() reques: RequestApiKeyGuard) {
    return reques.user;
  }
}
