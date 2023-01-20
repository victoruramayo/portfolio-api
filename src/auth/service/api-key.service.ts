import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apikey } from '../models/entities/apikey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectRepository(Apikey) private readonly apikeyRepo: Repository<Apikey>,
  ) {}

  async findApikeyAndProject(prefix: string) {
    return this.apikeyRepo.findOne({
      where: { prefix },
      relations: ['portfolio', 'portfolio.profile'],
    });
  }
}
