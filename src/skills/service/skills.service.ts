import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from '../models/entities/skiill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill) private readonly skillRepo: Repository<Skill>,
  ) {}

  findByProfileId(profileId: number) {
    return this.skillRepo.find({
      where: { profile_id: profileId },
    });
  }
}
