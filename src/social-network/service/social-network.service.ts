import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialNetwork } from '../models/SocialNetwork.entity';
import { Repository } from 'typeorm';
import { CreateSocialNetworkDTO } from '../dtos/CreateSocialNetworkDTO';

@Injectable()
export class SocialNetworkService {
  constructor(
    @InjectRepository(SocialNetwork)
    private readonly socialRepo: Repository<SocialNetwork>,
  ) {}

  async getSocialNetwork(userId: number) {
    return this.socialRepo.findBy({ profileId: userId });
  }

  async createSocialNetwork(social: CreateSocialNetworkDTO, userId: number) {
    const socialNetwork = this.socialRepo.create({
      ...social,
      profileId: userId,
    });
    return this.socialRepo.save(socialNetwork);
  }
}
