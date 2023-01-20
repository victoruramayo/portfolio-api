import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  checkAPIKey,
  getTokenComponents,
} from '../../commons/prefixed-api-key.utils';
import { ApiKeyService } from '../service/api-key.service';
import { Profile } from '../models/entities/profile.entity';
import { Portfolio } from '../../portfolio/models/entities/portfolio.entity';
import { Request } from 'express';

export interface RequestApiKeyGuard extends Request {
  user: Profile;
  info: { portafolio: Portfolio };
}

@Injectable()
export class ApikeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'apikey',
) {
  constructor(private readonly apikeyService: ApiKeyService) {
    super(
      { header: 'Authorization' },
      true,
      async (
        token,
        done: (err: Error | null, user?: unknown, info?: unknown) => void,
      ) => {
        const { shortToken, longTokenHash } = await getTokenComponents(token);
        const apikey = await apikeyService.findApikeyAndProject(shortToken);
        const isValidToken = await checkAPIKey(token, longTokenHash);
        if (!apikey && !isValidToken) {
          return done(new UnauthorizedException("Sorry don't have permission"));
        }

        return done(null, apikey.portfolio.profile, {
          portfolio: apikey.portfolio,
        });
      },
    );
  }
}
