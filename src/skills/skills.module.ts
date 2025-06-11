import { Module } from '@nestjs/common';
import { SkillsController } from './controller/skills.controller';
import { SkillsService } from './service/skills.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './models/entities/skiill.entity';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
  imports: [TypeOrmModule.forFeature([Skill])],
})
export class SkillsModule {}
