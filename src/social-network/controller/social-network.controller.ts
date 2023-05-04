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

@Controller('social-network')
export class SocialNetworkController {
  constructor(private readonly socialService: SocialNetworkService) {}
  @Get()
  @UseGuards(AuthGuard('apikey'))
  getSocialNetworks(@Request() req: RequestApiKeyGuard) {
    const { id } = req.user;
    return this.socialService.getSocialNetwork(id);
  }

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
