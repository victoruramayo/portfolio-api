import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import { SkillsService } from '../service/skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}
  @UseGuards(ApiKeyGuard)
  @Get()
  getSkills(@Request() req: RequestApiKeyGuard) {
    return this.skillsService.findByProfileId(req.user.id);
  }
}
