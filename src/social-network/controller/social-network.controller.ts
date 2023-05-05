import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import { SocialNetworkService } from '../service/social-network.service';
import { CreateSocialNetworkDTO } from '../dtos/CreateSocialNetworkDTO';
import {
  ApiBadRequestResponse,
  ApiHeader,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SocialNetwork } from '../models/SocialNetwork.entity';

@ApiSecurity('Api-Key')
@ApiTags('Portfolio')
@ApiHeader({
  name: 'Authorization',
  description: 'Api key generado',
})
@Controller('social-network')
export class SocialNetworkController {
  constructor(private readonly socialService: SocialNetworkService) {}
  @ApiOkResponse({
    description: 'Retorna todas las redes sociales del usuario',
    type: [SocialNetwork],
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
  getSocialNetworks(@Request() req: RequestApiKeyGuard) {
    const { id } = req.user;
    return this.socialService.getSocialNetwork(id);
  }

  @ApiOkResponse({
    description: 'Retorna la nueva red creada',
    type: SocialNetwork,
  })
  @ApiBadRequestResponse({
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: {
            type: 'string',
            example:
              'type must be one of the following values: Facebook, Github, LinkedIn, Twitter, Youtube, Twitch, Instagram, Whatsapp, Telegram, Other',
          },
        },
        error: { type: 'string', example: 'Bad Request' },
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
  @Post()
  // TODO Cambiar guard de api key a jwt para conectar con frontend
  @UseGuards(AuthGuard('apikey'))
  create(
    @Body() payload: CreateSocialNetworkDTO,
    @Request() req: RequestApiKeyGuard,
  ) {
    return this.socialService.createSocialNetwork(payload, req.user.id);
  }
}
