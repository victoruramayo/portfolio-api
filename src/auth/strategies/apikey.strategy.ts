// apikey.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { ApiKeyService } from '../service/api-key.service';
import {
  getTokenComponents,
  checkAPIKey,
} from '../../commons/prefixed-api-key.utils';
import { Profile } from '../models/entities/profile.entity';
import { Portfolio } from '../../portfolio/models/entities/portfolio.entity';

export interface RequestApiKeyGuard extends Request {
  user: Profile & { portfolio: Portfolio };
}

@Injectable()
export class ApikeyStrategy extends PassportStrategy(Strategy, 'apikey') {
  constructor(private readonly apiKeyService: ApiKeyService) {
    super();
  }

  async validate(req: Request): Promise<any> {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Missing API Key');
    }

    const { shortToken, longTokenHash } = await getTokenComponents(authHeader);
    const apikey = await this.apiKeyService.findApikeyAndProject(shortToken);
    const isValid = await checkAPIKey(authHeader, longTokenHash);

    if (!apikey || !isValid) {
      throw new UnauthorizedException('Invalid API Key');
    }

    (req as any).authInfo = { portfolio: apikey.portfolio };
    return { ...apikey.portfolio.profile, portfolio: apikey.portfolio };
  }
}
