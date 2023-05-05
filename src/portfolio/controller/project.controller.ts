import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { RequestApiKeyGuard } from '../../auth/strategies/apikey.strategy';
import { ProjectService } from '../service/project.service';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiHeader,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Project } from '../models/entities/project.entity';

@ApiSecurity('Api-Key')
@ApiTags('Portfolio')
@ApiHeader({
  name: 'Authorization',
  description: 'Api key generado',
})
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOkResponse({
    description: 'Retorna todos los proyectos del usuario',
    type: [Project],
  })
  @ApiUnauthorizedResponse({
    description: 'Sin Authorización',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 401 },
        message: { type: 'string', example: "Sorry don't have permission" },
        error: { type: 'string', example: 'Unauthorized' },
      },
    },
  })
  @UseGuards(AuthGuard('apikey'))
  @Get()
  getProjects(@Request() req: RequestApiKeyGuard) {
    const { portfolio } = req.authInfo;
    return this.projectService.getProjectsByPortfolioId(portfolio.id);
  }
}
