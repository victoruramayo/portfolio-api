import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import { ProjectService } from '../service/project.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(AuthGuard('apikey'))
  @Get()
  getProjects(@Request() req: RequestApiKeyGuard) {
    const { portfolio } = req.authInfo;
    return this.projectService.getProjectsByPortfolioId(portfolio.id);
  }
}
