import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  @Get()
  @UseGuards(AuthGuard('apikey'))
  getProfile(@Req() reques: RequestApiKeyGuard) {
    return reques.user;
  }
}
