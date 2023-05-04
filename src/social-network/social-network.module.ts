import { Module } from '@nestjs/common';
import { SocialNetworkController } from './controller/social-network.controller';
import { SocialNetworkService } from './service/social-network.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialNetwork } from './models/SocialNetwork.entity';

@Module({
  controllers: [SocialNetworkController],
  providers: [SocialNetworkService],
  imports: [TypeOrmModule.forFeature([SocialNetwork])],
})
export class SocialNetworkModule {}
