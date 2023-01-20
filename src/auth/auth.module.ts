import { Module } from '@nestjs/common';
import { ApiKeyService } from './service/api-key.service';
import { ApikeyStrategy } from './strategies/apikey.strategy';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apikey } from './models/entities/apikey.entity';

@Module({
  providers: [ApiKeyService, ApikeyStrategy],
  imports: [PassportModule, TypeOrmModule.forFeature([Apikey])],
})
export class AuthModule {}
